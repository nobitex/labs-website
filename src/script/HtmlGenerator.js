// Import necessary libraries
const fs = require('fs-extra');
const path = require('path');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

// Directory containing markdown files
const mdDir = './src/markdown'; 

// Directory to output HTML files
const htmlDir = './src/htmlFiles'; 

// Read the markdown directory
fs.readdir(mdDir, (err, files) => {
  if (err) throw err;

  // Loop through each file
  files.forEach(file => {
    // Ensure the file has a .md extension
    if (path.extname(file) === '.md') {
      // Read the markdown file
      fs.readFile(`${mdDir}/${file}`, 'utf8', (err, data) => {
        if (err) throw err;

        // Convert markdown to HTML
        const result = md.render(data);

        // Write to a new HTML file
        const htmlFileName = `${htmlDir}/${path.basename(file, '.md')}.html`;
        fs.writeFile(htmlFileName, result, (err) => {
          if (err) throw err;
          console.log(`File has been saved as ${htmlFileName}`);
        });
      });
    }
  });
});
