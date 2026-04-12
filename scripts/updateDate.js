const fs = require("fs");

const updateFilePath = "src/constants/updates.js";
let content = fs.readFileSync(updateFilePath, "utf-8");
const date = new Date();
content = content.replace(/const lastUpdateAt =.*/, `const lastUpdateAt = "${date.toISOString()}"`);

fs.writeFileSync(updateFilePath, content);