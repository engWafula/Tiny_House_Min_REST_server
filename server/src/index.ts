import express from "express"

const app =express();
const one:number=1;
const two:number=2;
const port =9000;

app.get('/',(_req,res)=>{
    res.send(`1+2=${one+two}`);
})
app.listen(port);

console.log(`[app]:http://localhost:${port}`);