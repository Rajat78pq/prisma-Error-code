import "dotenv/config";


import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

// * middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.send("Hii EveryOne");
});

// *Routes file

import routes from "./routes/index.js";
app.use(routes);

app.listen(PORT, ()=> console.log(`Server is runing on PORT ${PORT}`));