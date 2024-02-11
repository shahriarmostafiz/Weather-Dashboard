const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "United States",
    latitude: 37.0902,
    longitude: -95.7129,
  },
  {
    location: "China",
    latitude: 35.8617,
    longitude: 104.1954,
  },
  {
    location: "India",
    latitude: 20.5937,
    longitude: 78.9629,
  },
  {
    location: "Indonesia",
    latitude: -0.7893,
    longitude: 113.9213,
  },
  {
    location: "Pakistan",
    latitude: 30.3753,
    longitude: 69.3451,
  },
  {
    location: "Brazil",
    latitude: -14.235,
    longitude: -51.9253,
  },
  {
    location: "Nigeria",
    latitude: 9.082,
    longitude: 8.6753,
  },
  {
    location: "Bangladesh",
    latitude: 23.685,
    longitude: 90.3563,
  },
  {
    location: "Russia",
    latitude: 61.524,
    longitude: 105.3188,
  },
  {
    location: "Mexico",
    latitude: 23.6345,
    longitude: -102.5528,
  },
  {
    location: "Japan",
    latitude: 36.2048,
    longitude: 138.2529,
  },
  {
    location: "Ethiopia",
    latitude: 9.145,
    longitude: 40.4897,
  },
  {
    location: "Philippines",
    latitude: 12.8797,
    longitude: 121.774,
  },
  {
    location: "Egypt",
    latitude: 26.8206,
    longitude: 30.8025,
  },
  {
    location: "Vietnam",
    latitude: 14.0583,
    longitude: 108.2772,
  },
  {
    location: "DR Congo",
    latitude: -4.0383,
    longitude: 21.7587,
  },
  {
    location: "Turkey",
    latitude: 38.9637,
    longitude: 35.2433,
  },
  {
    location: "Iran",
    latitude: 32.4279,
    longitude: 53.688,
  },
  {
    location: "Germany",
    latitude: 51.1657,
    longitude: 10.4515,
  },
  {
    location: "Thailand",
    latitude: 15.87,
    longitude: 100.9925,
  },
  {
    location: "France",
    latitude: 46.6034,
    longitude: 1.8883,
  },
  {
    location: "United Kingdom",
    latitude: 55.3781,
    longitude: -3.436,
  },
  {
    location: "Italy",
    latitude: 41.8719,
    longitude: 12.5674,
  },
  {
    location: "South Africa",
    latitude: -30.5595,
    longitude: 22.9375,
  },
  {
    location: "Tanzania",
    latitude: -6.369,
    longitude: 34.8888,
  },
  {
    location: "Myanmar",
    latitude: 21.9162,
    longitude: 95.956,
  },
  {
    location: "South Korea",
    latitude: 35.9078,
    longitude: 127.7669,
  },
  {
    location: "Colombia",
    latitude: 4.5709,
    longitude: -74.2973,
  },
  {
    location: "Kenya",
    latitude: -0.0236,
    longitude: 37.9062,
  },
  {
    location: "Spain",
    latitude: 40.4637,
    longitude: -3.7492,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  if (filtered.length) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

// function getLocationByName(location) {
//   if (!location) return null;

//   const filtered = data.filter((item) => item.location === location);

//   if (filtered.length > 0) {
//     return filtered[0];
//   } else {
//     const defaultLocation = {
//       location: "",
//       latitude: 0,
//       longitude: 0,
//     };
//     return defaultLocation;
//   }
// }

export { getLocationByName, getLocations };
