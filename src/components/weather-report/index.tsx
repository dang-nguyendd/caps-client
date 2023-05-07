import { useState, useEffect } from "react";

import { IWeatherData } from "@/components/weather-report/type";
import { showToast } from "@/utils/toast";

const Component = () => {
  const [weather, setWeather] = useState<IWeatherData | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          const apiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data: IWeatherData) => {
              setWeather(data);
            });
        },
        (error: GeolocationPositionError) => {
          showToast("error", "User denied geolocation");
        }
      );
    } else {
      showToast("error", "Geolocation is not supported by this browser.");
    }
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weather?.main?.temp - 273.15);
  const weatherCondition =
    weather?.weather && weather?.weather.length > 0
      ? weather?.weather[0]?.description
      : "";
  const location = weather?.name;
  const iconUrl =
    weather?.weather && weather?.weather.length > 0
      ? `https://openweathermap.org/img/w/${weather?.weather[0]?.icon}.png`
      : "";

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <img src={iconUrl} alt={weatherCondition} />
      </div>
      <div>
        <div>Temperature: {temperature} °C</div>
        <div>Location: {location}</div>
      </div>
    </div>
  );
};

Component.displayName = "Weather";

export default Component;
