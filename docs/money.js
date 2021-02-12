export default class MoneyService {
  static getRate(countryCode){
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/enriched/GBP/${countryCode}`)
      .then(function(response){
        if(!response.ok){
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error){
        return error;
      });
    }
}
