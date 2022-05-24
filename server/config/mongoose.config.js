const  mongoose  = require("mongoose");

mongoose.connect('mongodb://localhost/Bromas_DB',{
    userNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => console.log('Established a connection to the datebase' ))
.catch( err => console.log('Something went when connecting to the database' , err ));
