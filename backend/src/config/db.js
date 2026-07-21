// import { MongoClient } from "mongodb";
// import {config} from "./env.js";

// export const connectToDatabase = async () => {
//     try{
//         const client = await MongoClient.connect(config.DB_HOST, {
//         });
//         console.log("Connected to MongoDB");
//         return client.db(config.DB_NAME);        
//     }
//     catch(error){
//         console.error("Error connecting to MongoDB:", error);
//         throw error;
//     }
// };

// mongoose usage
import mongoose from "mongoose";
import { config } from "./env.js";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.DB_HOST, {
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};