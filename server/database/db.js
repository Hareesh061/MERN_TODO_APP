import mongoose from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

 const Connection =() =>{

    const MONGODB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-6tbf6lw-shard-00-00.pbrpik4.mongodb.net:27017,ac-6tbf6lw-shard-00-01.pbrpik4.mongodb.net:27017,ac-6tbf6lw-shard-00-02.pbrpik4.mongodb.net:27017/?ssl=true&replicaSet=atlas-24tr8a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;

    mongoose.connect(MONGODB_URI,{ useNewUrlParser: true});

    mongoose.connection.on('connected',() => {
        console.log('database connected successfully');
    });
    
    mongoose.connection.on('disconnected', () => {
        console.log('discunnected');
    });
   
    mongoose.connection.on('error', () => {
        console.log('error with connecting database', error.message);

    });

};

export default Connection;
