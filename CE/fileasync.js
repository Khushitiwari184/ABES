const fs=require("fs/promises");
const read = async () => {
    const data = await fs.readFile("./data.text","utf-8");
    console.log(data);
}
const write = async () => {
    const newdata ="Hello World";
    await fs.writeFile("./data1.txt",newdata ,"utf-8");
    
}
write();
// read();
// console.log("first");
// console.log("second");
// console.log("third");   CD