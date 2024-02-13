import mongoose, { connection } from "mongoose";
export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongoose is connected successfully");
    });
    //for error
    connection.on("error", (err) => {
      console.log("Mongoose is not  connected successfully" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Some thing went wrong");
    console.log(error);
  }
}
