import mongoose from 'mongoose';

let isConnected = false; // track connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "pokemon-masterlist",
            useNewUrlParser: true,
            UseUnifiedTopology: true,
        });

        isConnected = true;

        console.log("MongoDB connected");
    } catch (error) {
        console.error(error);
    }
}