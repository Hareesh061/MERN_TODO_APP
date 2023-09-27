import mongoose from "mongoose";

 const Connection =() =>{

    const MONGODB_URI = 'mongodb://user:user123@ac-6tbf6lw-shard-00-00.pbrpik4.mongodb.net:27017,ac-6tbf6lw-shard-00-01.pbrpik4.mongodb.net:27017,ac-6tbf6lw-shard-00-02.pbrpik4.mongodb.net:27017/?ssl=true&replicaSet=atlas-24tr8a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp';

    mongoose.connect(MONGODB_URI,{useNewUrlPasser: true});

    mongoose.connection.on('connected',() => {
        console.log('database connected successfully');
    })
    
    mongoose.connection.on('dissconnected', () => {
        console.log('discunnected');
    })
   
    mongoose.connection.on('error', () => {
        console.log('error with connecting database', error.message);

    })

}

export default Connection;