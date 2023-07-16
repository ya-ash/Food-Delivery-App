const mongoose = require('mongoose');
// const mongoURI = "mongodb+srv://7470821115asdf:Tarwani12@clustermaybe.uef7yhc.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoURI ="mongodb://7470821115asdf:Tarwani12@ac-vefkhsj-shard-00-00.uef7yhc.mongodb.net:27017,ac-vefkhsj-shard-00-01.uef7yhc.mongodb.net:27017,ac-vefkhsj-shard-00-02.uef7yhc.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-q9ap15-shard-0&authSource=admin&retryWrites=true&w=majority"

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items= fetched_data;
    const catData = await mongoose.connection.db.collection("food_category").find({}).toArray();
    global.foodCategory= catData;


    // console.log(global.food_items);
    
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
module.exports = mongoDB;