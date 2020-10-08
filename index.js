// code away!
const express=require("express")
const userRouter=require("./users/userRouter")
const logger=require("./middleware/logger")
const welcomeRouter=require("./welcome/welcome")
const server=express()
const port =4000

server.use(logger("long"))
//server.use(welcomeRouter)
server.use(userRouter)

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})