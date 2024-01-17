// scripts/build.js

// Import necessary modules and dependencies
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Define the build script function
function build() {
  // Check if the necessary files and assets exist
  if (!fs.existsSync("src")) {
    console.error("Error: Missing source files");
    return;
  }

  // Run the build command
  exec("npm run build", (error, stdout, stderr) => {
    if (error) {
      console.error("Error: Build failed");
      console.error(stderr);
    } else {
      console.log("Build successful");
      console.log(stdout);
    }
  });
}

// Call the build function
build();

// Export the build function if needed
module.exports = build;
