import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

import NavBar from './components/NavBar';
import PlanetPage from './components/PlanetPage';
const axios = require('axios');

function App() {
  const [planetFacts, setPlanetFacts] = useState([]);
  const [loadingComplete, setLoadingComplete] = useState(false);

  const fetchFacts = useCallback(async () => {
    const response = await axios.get('data.json');
    setPlanetFacts(response.data);
    // Make loading page? - FOUC!
    setLoadingComplete(true);
  }, []);

  useEffect(() => {
    fetchFacts();
  }, [fetchFacts]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <ThemeProvider theme={theme}>
          <NavBar planets={planetFacts} />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                loadingComplete && (
                  <PlanetPage
                    homePlanet={planetFacts.find(
                      (planet) => planet.name === 'Earth'
                    )}
                  />
                )
              }
            />
            <Route path="/:planet" children={<PlanetPage />} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
