const http=require('http');
const fs = require('fs/promises');
const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const filedata = await fs.readFile("./aa.json","utf-8");
    const parsedata =JSON.parse(filedata);
    //const newdata=users.map((user)=>{
       //return user.name
        
    //});
    //let newdata ="";
    //users.forEach((user)=>{
       // newdata +=`${user.name}`;
    //});
    res.end(JSON.stringify(parsedata));//json.stringify


});
PORT =3000;
server.listen(PORT,()=>{
    
    console.log(`Server is running on port ${PORT}`);
    });