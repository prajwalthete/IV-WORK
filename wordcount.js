const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const wordCount = data.trim().split(/\s+/).length;

  console.log(`The file contains ${wordCount} words.`);
});
