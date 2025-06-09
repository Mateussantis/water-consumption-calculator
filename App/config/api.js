var App = App || {};
App.Config = {
  API_URL: location.hostname === 'localhost'
    ? 'http://localhost:5165'
    : 'https://water-consumption-calculator-production.up.railway.app'
};
