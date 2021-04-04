const apiKey = 'd6565ee0950c8e6ff7fb16a02ee37ca6';

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
