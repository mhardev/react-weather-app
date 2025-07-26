export const DEFAULT_PLACE = {
    name:"Quezon City",
    place_id:"quezon-city",
    adm_area1:"National Capital Region",
    adm_area2:"Eastern Manila District",
    country:"Philippines",
    lat:"14.6488N",
    lon:"121.0509E",
    timezone:"Asia/Manila",
    type:"settlement",
};

export const MEASUREMENT_SYSTEM = {
    AUTO: "auto",
    METRIC: "metric",
    UK: "uk",
    US: "us",
    CA: "ca",
}

export const UNITS = {
    metric: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'm/s',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  us: {
    temperature: '°F',
    precipitation: 'in/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  uk: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'mph',
    visibility: 'mi',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
  ca: {
    temperature: '°C',
    precipitation: 'mm/h',
    wind_speed: 'km/h',
    visibility: 'km',
    humidity: '%',
    uv_index: '',
    cloud_cover: '%',
  },
}