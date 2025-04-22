let express = require("express");
let db_var = require("./Database")
require("dotenv").config();

let port_no = process.env.PORT

let myapp = express();

db_var().then(()=>{
    myapp.listen(port_no, () => {
        console.log(`Server is running on port http://localhost:${port_no}`);
    })
}).catch((e)=>{
    console.log(e);
})