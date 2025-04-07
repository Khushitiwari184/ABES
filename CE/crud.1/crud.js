const express=require('express');
const app=express();
const port=3000;
app.use(express.json());//predefine middleware(loader)

const database=[{id:1,name:"khushi",age:20},
    {id:2,name:"shashwat",age:22}

]//create(c)
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser);
    res.status(201).json(newuser);
})
//read(r)-->read all

app.get('/users',(req,res)=>{
    res.json(database);
});

//read one 
app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);//parameters
    const user=database.find(u=>u.id===userid);
    if (user){
        res.json(user);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})

//update(u)
app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=>u.id===userid);
    if(userIndex != -1){
        database[userIndex]={...database[userIndex],...req.body};
        res.json(database[userIndex]);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})

//delete(d)
app.delete('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id);
    const userIndex=database.findIndex(u=>u.id===userid);
    if(userIndex != -1){
        const deleteuser=database.splice(userIndex,1);//delete function
        res.json(deleteuser);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})

app.listen(port,()=>{
    console.log(`app is rum at:${port}`);
})