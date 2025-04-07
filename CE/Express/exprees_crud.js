import express from "express";
const users = [{
    id: 1,
    name: "Khushi",
    age: 21
}]
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send(users);
});
// app.use(express.text()); // When u select text in postman app
app.use(express.json());  // middle where app use is a inbulid function used for middlewhere. when u select json in postman app
// advantage of express implicit type data and easy to use
app.post('/api/createUser', (req, res) =>{
    //const bodydata = req.body;
    // users.push(bodydata); 
    const {name,age} = req.body;
    const newid = users.length > 0 ? users[users.length -1].id + 1 : 1;
    users.push({id: newid,name,age});
    //console.log(bodydata)
    res.send("new user is created successfully");
});
app.get('/api/user/:id', (req, res) =>{
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
});
app.patch('/api/updateUser/:id', (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name;
    res.send("User is updated successfully");
});
app.delete('/api/deleteUser/:id', (req, res) =>{
    const {id} = req.params;
    const index = users.findIndex(user => user.id == id);
    users.splice(index,1);
    res.send("User is deleted successfully");
});
app.listen(port,()=>{
    console.log(`server is listening on ${port}`);
});