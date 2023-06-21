const fs = require("fs");

fs.readFile(__dirname + "/arvind.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File contents:", data);
});
