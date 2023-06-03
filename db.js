import mongoose from "mongoose";

const mongodb = async (mongouri) => {
  //   mongoose.set("strictQuery", false);
  await mongoose
    .connect(mongouri, {
      dbName: "merncalculator",
    })
    .then(() => {
      console.log("Database Connected");
    })
    .catch((e) => console.log(e));
};

export default mongodb;
