const mongoose = require('mongoose');


main()
    .then(()=>{
        console.log("connection successful");
    })
   .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/project001');
}

module.exports = main;