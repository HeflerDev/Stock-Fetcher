const apiKey = 'af6d5d2d48987d8ac328c48e5bf40e8e';

const getApiUrl = {
  profile(value) {
    return `https://financialmodelingprep.com/api/v3/profile/${value}?apikey=${apiKey}`;
  },
  search(value) {
    return `https://financialmodelingprep.com/api/v3/search?query=${value}&limit=10&apikey=${apiKey}`;
  },
  actives() {
    return `https://financialmodelingprep.com/api/v3/actives?apikey=${apiKey}`;
  },
  gainers() {
    return `https://financialmodelingprep.com/api/v3/gainers?apikey=${apiKey}`;
  },
  losers() {
    return `https://financialmodelingprep.com/api/v3/losers?apikey=${apiKey}`;
  },
};

export default getApiUrl;
