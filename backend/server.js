const express =  require("express");
const bodyParser = require("body-parser");
//const cors = require("cors")

const app = express();
const  userRoutes = require("./routes/user-routes");


// middleware 
 app.use(bodyParser.json());
// routes 

app.use('/api/user',userRoutes);


app.listen(4000,()=>{console.log("Server is running")})