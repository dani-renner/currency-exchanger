export default class MoneyService {
  static async getRate(countryCode){
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/enriched/GBP/${countryCode}`);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
