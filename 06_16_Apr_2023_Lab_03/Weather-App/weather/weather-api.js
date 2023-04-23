
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "079870cc22d9f8fe5a13dde5ed480690"
class WeatherAPI{

    constructor(userData){
  
      this.userData = userData;
  
      this.apiURL = new URL(API_BASE_URL);
    }
  
    async invoke(){
  
      /*
      fetch()
      .then( (response) => {
      })
      .catch ( (error) => {
      })
      */
  
      const urlString = this.apiURL.toString();
  
      const responseObj = await fetch(urlString);
      const responseInJSON = await responseObj.json();
  
      return responseInJSON;
    }
  
    buildURL(){
  
      this.apiURL.searchParams.append("q", this.userData);
      this.apiURL.searchParams.append("units", "metric");
      this.apiURL.searchParams.append("appid", API_KEY);
  
      console.log(`API URL is ${this.apiURL}`);
    }
  
  }
  
  export {WeatherAPI};