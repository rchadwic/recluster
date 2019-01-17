let recluster = require("../index.js");

let cluster = recluster("./messageWorker.js");

cluster.on('message',function(worker,message)
{
    console.log(message);
})

cluster.run(true);
