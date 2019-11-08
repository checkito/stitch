exports = async function () {
  var collection = context.services.get("mongodb-atlas").db("test").collection("timestamps");
  await collection.insertOne({ timestamp: new Date() });
};