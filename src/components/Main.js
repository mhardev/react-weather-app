import '../styles/components/Main.scss';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import Loader from './Loader';

function Main() {
  const {loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext);
  
  const limitedHourlyForecast = Array.isArray(hourlyForecast) ? hourlyForecast.slice(0, 24) : [];
  const limitedDailyForecast = Array.isArray(dailyForecast) ? dailyForecast.slice(0, 14) : [];

  return (
    <div className="Main">
      {loading ? (
        <Loader/> 
      ) : (
        <>
          <CurrentWeather data={currentWeather} />
          <Forecast type="hourly" title="24-Hours Forecast" data={limitedHourlyForecast} />
          <Forecast type="daily" title="14 Days Forecast" data={limitedDailyForecast} />
        </>
      )}
    </div>
  )
}

export default Main
