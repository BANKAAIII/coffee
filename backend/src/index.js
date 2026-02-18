import express from "express";
const app = express();
import routes from "../src/routes/index.js"
app.use(express.json());

const port = 5000;

app.use("/api/v1",routes)

app.listen( port, ()=>{
    console.log(" The server is online!! ")
    console.log(" local port running : ",port);
} )
