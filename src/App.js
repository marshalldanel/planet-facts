import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

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
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <p>Facts go here.</p>
      </ThemeProvider>
    </>
  );
}

export default App;
