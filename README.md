# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Created a component named GetWeather & added input and button elements

2. Created a state variable to store the city name and set the city name using state updating function

3. Fetched the weather data from API end point `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

4. Set the weather data using state updating function and passed the data through props to the "WeatherDetails" component.

5. Displayed the weather data on the UI

6. Initialized tailwindCSS for styling
