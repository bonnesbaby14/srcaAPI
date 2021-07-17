const express = require("express");
const app = express();

const obj ={
    name:"name",
    lastname:"lastname",
    new:"new "
}





app.listen(3000, () => {
 console.log("Server running on port 3000");
});


app.get("/",(req,res)=>{
    console.log("datos: \n "+req);
    res.json(obj);
    
});