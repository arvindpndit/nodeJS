const fs = require("fs");

const data = `I'm 21y old ⚡`;

// fs.writeFile(__dirname + "/arvind.txt", data, "utf8", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//     return;
//   }

//   console.log("File write operation completed.");
// });

fs.appendFile(__dirname + "/arvind.txt", data, "utf8", () => {
  console.log("text appended succesfully");
});
