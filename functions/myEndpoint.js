// netlify/functions/myEndpoint.js
exports.handler = async function(event, context) {
    const data = JSON.parse(event.body);
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received successfully" })
    };
  };
  