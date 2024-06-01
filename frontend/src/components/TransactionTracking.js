import React, { useState } from 'react';

function TransactionTracking() {
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleButtonClick = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.up.com.au/api/v1/transactions', {
        method: 'GET', // Use POST method
        headers: {
          'Authorization': `Bearer up:yeah:Y1tLwVGFKulEVg5MrQRda2KwiwFWUqBUsFfHk4HZnIEMNI9VENuXKoNQMNtCVGrgRjkGL6a85Kq0VKvGSuoiVyGQ1hV83qNrOSQoOEGONAm8R2h366NLMAOWG3BB03yD` // Replace with your actual API key
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const firstTransaction = data.data && data.data.length > 0 ? data.data[0] : null;
      setTransactionData(firstTransaction);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>Hoi scobie! Press the button to see scregorie's latest transaction on Up:</div>
      <button type="button" onClick={handleButtonClick}>Button</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {transactionData && (
        <div>
          <h3>Transaction Data:</h3>
          <pre>{JSON.stringify(transactionData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default TransactionTracking;
