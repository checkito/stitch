// This function is the webhook's request handler.
exports = async function(payload, response) {
    const collection = context.services.get("mongodb-atlas").db("test").collection("timestamps");
    await collection.deleteMany({});
    return  "Hello World!";
};