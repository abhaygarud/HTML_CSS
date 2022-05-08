const fs=require("fs");
let text = fs.readFileSync("abhay.txt","utf-8")
console.log(text)

text =text.replace("sakshi","wadare");
console.log(text)


fs.writeFileSync("sakshi.txt",text)