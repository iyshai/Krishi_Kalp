const express = require('express');
const https = require('https');
const querystring = require('querystring');
const Commodity = require('../models/Commodity'); // MongoDB model

const commodityController = express.Router();

// Function to fetch commodity data from the API
function fetchApiData(state, district, market, commodity, callback) {
  const apiKey = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';
  const baseUrl = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';

  const params = {
    'api-key': apiKey,
    'format': 'json',
    'limit': 100,
    'offset': 0,
    'filters[state.keyword]': state,
    'filters[district]': district,
    'filters[market]': market,
    'filters[commodity]': commodity
  };

  let allRecords = [];

  function fetchData(offset = 0) {
    params.offset = offset;
    const queryString = querystring.stringify(params);
    const url = `${baseUrl}?${queryString}`;

    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        const apiResponse = JSON.parse(data);
        allRecords = allRecords.concat(apiResponse.records);

        if (apiResponse.records.length === params.limit) {
          fetchData(offset + params.limit);
        } else {
          callback(allRecords);
        }
      });

    }).on('error', (err) => {
      console.error('Error fetching data:', err.message);
      callback(null, err.message);
    });
  }

  fetchData();
}

// Route to get commodity data from both sources
commodityController.post('/get-commodity-info', async (req, res) => {
  const { state, district, market, commodity } = req.body;

  try {
    // Fetch data from the external API
    fetchApiData(state, district, market, commodity, async (apiRecords, apiError) => {
      if (apiError) {
        return res.status(500).send(`API Error: ${apiError}`);
      }

      // Fetch data from MongoDB
      const mongoRecord = await Commodity.findOne({ Commodity: commodity });

      if (!mongoRecord) {
        return res.status(404).send('Commodity not found in MongoDB.');
      }

      res.json({
        apiRecords: apiRecords,
        mongoRecord: {
          Commodity: mongoRecord.Commodity,
          Variety: mongoRecord.Variety,
          '2023-24': mongoRecord['2023-24'],
        },
      });
    });

  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

module.exports = commodityController;
