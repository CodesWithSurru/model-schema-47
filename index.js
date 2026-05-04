const express = require("express");
const app = express();

let port = 8080 ; 
app.listen(port, ()=> {
    console.log("App is listening on port",port);
})

app.get("/books",(req,res)=>{
    res.send("U tried for Books")
    res.render("books.ejs")
}) 
app.get("/book/new",(req,res)=>{
    res.send("List of new books")
    res.render()
})
app.post("/book/new",(req,res)=>{
    res.send("List of new books")
})
app.get(" /books/:id",(req,res)=>{
    res.send("Unique book")
    let {id}= req.params() ;
    let data = require("data.json");
    let name = data.id.name ;
    res.render("id.ejs",name);
    
    

})
app.get("/books/:id/edit",(req,res)=>{
    res.send("Particular book editing")
})
app.get("/books/:id/edit",(req,res)=>{
    res.send("Particular book editing")
})    
app.get("/register",(req,res)=>{
res.send()
})
