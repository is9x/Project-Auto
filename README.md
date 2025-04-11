Got it! Here's the updated `README.md` in proper Markdown format with code blocks for GitHub:

```markdown
# Project Auto Debug Tool 🚀

## Overview
The **Project Auto Debug Tool** is a Google Apps Script-based web application designed for managing access permissions on Google Drive files. It efficiently removes all **Editors**, **Viewers**, and **Commenters** except the authenticated user. Featuring a sleek debug-themed UI, optional delay, and verbose logging, this tool is perfect for managing sensitive file permissions.

---

## Features ⚙️
- **Automatic Permission Management**: Removes all Editors, Viewers, and Commenters while retaining your access.
- **Debug Mode**: Provides detailed logs of actions taken during execution.
- **Optional Delay**: Adds a configurable 100ms delay between removal actions to improve performance for large files.
- **Sleek Debug-Themed UI**: Includes dark mode styling and Chromium logo branding.
- **Logs Display**: Outputs real-time results in a scrollable section for transparency.

---

## Installation 🛠️
Follow these steps to set up and deploy the **Project Auto Debug Tool**:

### Clone the Repository:
```bash
git clone https://github.com/your-repo/project-auto-debug-tool.git
```

### Set Up Google Apps Script:
1. Open the [Google Apps Script Editor](https://script.google.com/) and create a new project.
2. Copy the contents of `Code.gs` into the **Script Editor**.
3. Copy the contents of `index.html` into a new HTML file in the project.

### Enable Drive API:
1. Click on `Extensions > Apps Script Services`.
2. Add and enable the **Drive API**.

### Deploy as Web App:
1. Click `Deploy > New Deployment`.
2. Choose **Web App**:
   - Execute as: *Me (your account)*.
   - Who has access: *Anyone*.
3. Copy the generated Web App URL to access the tool.

---

## Usage 📋
1. Open the tool via the Web App URL.
2. Paste the **Google Doc/Slide URL** into the **File URL** field.
3. Configure the following options:
   - **Enable Debug Mode** (optional): Provides detailed logs of the process.
   - **Enable Delay** (optional): Introduces a 100ms delay between actions to handle large files effectively.
4. Click **Execute**.
5. View logs in the output section for verification.

---

## Example Logs 🐞
With **Debug Mode** enabled:
```text
Authenticated user's email: user@example.com
Found 3 editors and 2 viewers/commenters.
Removing editor: editor1@example.com
Removing editor: editor2@example.com
Skipping authenticated user (editor): user@example.com
Removing viewer/commenter: viewer1@example.com
Skipping authenticated user (viewer/commenter): user@example.com
Finished processing the file.
```

---

## Debug-Themed UI 🎨
The tool features:
- **Dark Mode Styling:** Inspired by professional developer tools.
- **Chromium Logo:** Positioned at the top-right corner for branding.
- **Scrollable Logs:** All actions and logs are displayed in a clean, interactive log area.

---

## Warnings ⚠️
- **Ensure File Ownership**: You must have sufficient permissions to manage access to the selected file.
- **Access Retention**: Only the authenticated user's access is retained—double-check before execution.

---

## Contribution 🤝
We welcome contributions! To contribute:
1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License 📄
Distributed under the [MIT License](LICENSE).
```

This Markdown file is formatted and ready to be uploaded to your GitHub repository as `README.md`. Let me know if you need any tweaks or additions! 🚀
