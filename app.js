const http=require('http');

const server=http.createServer((req,res)=>{
let message;

if(req.url === "/home"){
    message="Welcome home";}
else if(req.url === "/about"){
    message="Welcome to About Us";}
    else if(req.url === "/node"){
    message="Welcome to Node Js project";}
else{
    message="Page not found";}

res.writeHead(200,{'Content-Type':'text/html'});
res.end(`<h1>${message}</h1>`);
})

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});   