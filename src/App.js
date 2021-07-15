import { useState, useEffect, useCallback } from 'react';
const axios = require('axios');

function App() {
  const [planetFacts, setPlanetFacts] = useState([]);

  const fetchFacts = useCallback(async () => {
    const response = await axios.get('data.json');
    setPlanetFacts(response.data);
  }, []);

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);
  return (
    <>
      <p>Facts go here.</p>
    </>
  );
}

export default App;
