## 📄 Adding a New Document

To add a new document to the project, follow these steps:

1. 📁 Navigate to the `src` directory.
2. ➡️ Place your markdown file in the `markdown` folder.

### 📋 Important Guidelines

1. **📝 Filename Convention**:
   - Each markdown file should have a number prefix.
   - The number should be greater than the last number in the folder.
   - For example, if the latest file is `3-markdown.md`, the new file should be named `4-markdown.md`.

2. **⚠️ YAML Front Matter**:
   - Every markdown file must include a YAML front matter block.
   - This block is crucial for the project to function correctly.
   - Below is an example of the required YAML format:

    ```yaml
    ---
    title: Your Title Here
    description: A brief description of the document.
    category: ["Your Category Here"]
    date: YYYY-MM-DD
    ---
    ```

3. **🚨 Warnings**:
   - If the markdown file does not include the YAML front matter, the project will not work correctly.
   - Ensure the added number in the filename is greater than the last existing number to maintain order.

## 🚀 Deploying Your Changes

After adding your markdown file to the `src` directory, follow these steps to build and deploy the project:

1. **🏗️ Build the Project**:
   - Run the command: `yarn run build`
   - This command performs the following tasks:
     - Generates a JSON file with the addresses of the new markdown files (updating it for new files).
     - Generates HTML files from the markdown files.
     - Builds the project with the new updates.

2. **🌐 Deploy to GitHub Pages**:
   - Run the command: `yarn deploy`
   - This command deploys the project to the `gh-pages` branch, updating the site.

3. **🔄 Final Steps**:
   - After deployment, run: `yarn start`
   - Push changes to the main branch to keep it updated: `git push`

By following these steps, your project will be updated and deployed correctly.
