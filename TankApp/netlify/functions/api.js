exports.handler = async (event) => {
  try {

    const API_KEY = "1887fa92-8a53-462a-8efc-d124c14297a4";

    const lat = event.queryStringParameters?.lat || 52.18;
    const lng = event.queryStringParameters?.lng || 10.97;

    const url = "https://creativecommons.tankerkoenig.de/json/list.php" +
      "?lat=" + lat +
      "&lng=" + lng +
      "&rad=10" +
      "&type=diesel" +
      "&sort=dist" +
      "&apikey=" + API_KEY;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};