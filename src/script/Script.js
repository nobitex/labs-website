// Import required modules
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the directory containing the Markdown files
const directory = './src/markdown';

// Read all files in the directory
const files = fs.readdirSync(directory);

// Initialize an array to hold the results
let result = [];

// Loop through each file
files.forEach(file => {
  // Define the path to the file
  const filePath = path.join(directory, file);

  // Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the YAML front matter and the Markdown content
  const { content, data } = matter(fileContent);

  // Import the remark module
  import('remark').then(remark => {
    // Convert the Markdown content to HTML
    remark.remark()
      .use(remark.html)
      .process(content, function (err, file) {
        if (err) throw err;

        // Push the parsed data to the result array
        result.push({
          title: data.title,
          description: data.description,
          category:data.category,
          date:data.date,
          fileName: path.basename(filePath).replace(".md","") // Add the filename to the object
        });
      });
  });
});

// Wait for all promises to resolve
Promise.all(files.map(file => import('remark')))
  .then(() => {
    // Get the existing data from the JSON file
    let existingData = [];
    if (fs.existsSync('../json/main.json')) {
      existingData = JSON.parse(fs.readFileSync('../json/main.json', 'utf8'));
    }

    // Combine the existing data with the new data
    let combinedData = [...existingData, ...result];

    // Convert the combined data array to a JSON string
    const jsonString = JSON.stringify(combinedData, null, 2);

    // Write the JSON string to a file
    fs.writeFileSync('./src/json/main.json', jsonString);
  });
