// This function is the webhook's request handler.
exports = async function(payload, response) {
    const db = context.services.get("mongodb-atlas").db("test");
    await db.dropDatabase();
    return  "Hello World!";
};