

const io = require('socket.io')
const server = io.listen(5000)


server.on("connection",(socket)=>{
   // console.log(socket.io);
    console.log("Client Connect : " + socket.id)
    socket.broadcast.emit("greeting",{msg:"welcome",user:"user_"+ socket.id});
    socket.emit("greeting",{msg:"welcome" ,user:"user_"+ socket.id});

});