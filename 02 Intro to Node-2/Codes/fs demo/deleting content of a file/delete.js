const fs = require("fs");

fs.unlink(__dirname + "/arvind.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }

  console.log("File deleted successfully.");
});
