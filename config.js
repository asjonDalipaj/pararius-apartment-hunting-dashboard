let config = {};

// We will parse the listings from this URL, open it in your browser first, adjust the filters and make sure it is in the list mode not the maps.
//config.url = "https://www.pararius.com/apartments/eindhoven/0-1200/radius-25/furnished/25m2";
//config.url = "https://www.pararius.com/apartments/eindhoven/1250-1750/radius-25/3-rooms/furnished/50m2";
//config.url = "https://www.pararius.com/apartments/utrecht/0-1750/radius-10/3-rooms/furnished/50m2";
//config.url = "https://www.pararius.com/apartments/eindhoven/0-1750/radius-40/3-rooms/furnished"; // Flatmate 40km around Eindhoven
config.url = "https://www.pararius.com/apartments/eindhoven/0-1750/radius-10/3-rooms/furnished/"; // Flatmate bike distance Bart

// Frequency of scraping and updates from Pararius in minutes. (Minimum: 15)
config.updateFrequency = 60;

// Used to calculate distance and commute time, can be any string. Please try it on Google maps first.
config.commuteAddress = "Vestdijk 51, Eindhoven"

// Used to calculate distance and commute time to commuteAddress. It can be: driving, walking, bicycling or transit. (transit calculate it as if you are commuting now)
config.commuteMode = "bicycling";

// Max results per page in the dashboard.
config.resultsPerPage = 30

// So as not to leech Pararius, a sane limit has to be in place.
config.maxScrapingResults = 500

// Maximum requests per second for Pararius.
config.parariusMaxRequestPerSecond = 10

// Maximum requests per second for Google APIs.
config.googleApisMaxRequestPerSecond = 10

// Very important to calculate distance, coordinates, and displaying maps in the dashboard.
// These APIs have to be enabled on https://console.developers.google.com/: Geocoding API, Maps JavaScript API, and Distance Matrix API
config.googleApi = "GOOGLE_API"

// Where to serve the app
config.port = 8080

module.exports = config;