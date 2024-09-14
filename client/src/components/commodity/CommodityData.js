import React from 'react';
import './CommodityData.css'; // Optional CSS for styling

const CommodityData = ({ data }) => {
  return (
    <div className="results">
      <h2>Results from MongoDB:</h2>
      <table>
        <thead>
          <tr>
            <th>Commodity</th>
            <th>Variety</th>
            <th>2023-24 Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.mongoRecord.Commodity}</td>
            <td>{data.mongoRecord.Variety}</td>
            <td>{data.mongoRecord['2023-24']}</td>
          </tr>
        </tbody>
      </table>

      <h2>Results from External API:</h2>
      {data.apiRecords && data.apiRecords.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Market</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.apiRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.commodity}</td>
                <td>{record.market}</td>
                <td>{record.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No data found from the external API.</p>
      )}
    </div>
  );
};

export default CommodityData;
