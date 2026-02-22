import mongoose from "mongoos";

cons connectDB = async ()=> {
    try {
        //this is a node.js event listener 
        //they are always attached to an object 
        mongoose.connection.on('connected', () => console.log("Database Connected")
    );

    await mongoose.connect
    }

}