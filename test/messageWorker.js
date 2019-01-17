let cluster = require('cluster');
if(cluster.isWorker)
{
    process.send({message:"got here"});
}

let http = require('http');
let server = new http.Server();
server.listen(3000);
console.log("should not see this");