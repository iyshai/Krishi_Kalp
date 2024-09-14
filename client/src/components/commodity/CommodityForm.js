import React, { useState } from 'react';
import CommodityData from './CommodityData';
import './CommodityForm.css'; // Import the CSS for form and results

function CommodityForm() {
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    market: '',
    commodity: '',
  });

  const [commodityData, setCommodityData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:4000/commodities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setCommodityData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    setLoading(false);
  };

  return (
    <div className="CommodityForm">
      <h1>Commodity Price Checker</h1>
      <form className="commodity-form" onSubmit={handleSubmit}>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="district">District:</label>
        <input
          type="text"
          id="district"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="market">Market:</label>
        <input
          type="text"
          id="market"
          name="market"
          value={formData.market}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="commodity">Commodity:</label>
        <input
          type="text"
          id="commodity"
          name="commodity"
          value={formData.commodity}
          onChange={handleInputChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Commodity Info'}
        </button>
      </form>

      {loading && <div className="spinner"></div>}

      {commodityData && <CommodityData data={commodityData} />}
    </div>
  );
}

export default CommodityForm;
