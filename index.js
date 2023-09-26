//cron server
import cron from "node-cron";
import express from "express";
  
// Initializing app
const app = express();
  
// Creating a cron job which runs on every 10 second
//schedule the task 
cron.schedule("*/1 * * * * ", function() {
    console.log("running a task every 1 minute");
});

//port
app.listen(3000);