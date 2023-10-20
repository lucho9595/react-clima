import React from 'react';
import useWeatherData from './hooks/fetchClima';
import { Loading } from './components/Loading';

const WeatherApp = () => {
    const {
        city,
        dataClima,
        handleChange,
        handleSubmit,
        difKelvin
    } = useWeatherData();

    return (
        <div className="container">
            <h1>Aplicación del Clima</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ingrese la Ciudad"
                    value={city}
                    onChange={handleChange}
                />

                <button type="submit">Buscar</button>
            </form>
            <div className="data">
                {dataClima ? (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p>Condición Meteorológica: {dataClima.weather[0].description}</p>
                    </div>
                ) : <Loading />
                }
            </div>
        </div>
    );
};

export default WeatherApp;
