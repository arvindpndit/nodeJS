const fs = require("fs");

fs.truncate(__dirname + "/arvind.txt", () => {
  console.log("file content deleted successfully");
});
