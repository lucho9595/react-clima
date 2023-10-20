import axios from 'axios';
import { useState } from 'react';
import { API_KEY, URL } from '../apiweather';

const useWeatherData = () => {
    const [city, setCity] = useState('');
    const [dataClima, setDataClima] = useState(null);
    const [error, setError] = useState(null);

    const difKelvin = 273.15;

    const fetchClima = async () => {
        try {
            if (city) {
                const response = await axios.get(`${URL}?q=${city}&appid=${API_KEY}`);
                const info = await response.data;
                setDataClima(info);
            } else {
                setError("Por favor, ingrese una ciudad válida.");
            }
        } catch (error) {
            setError("Ocurrió un problema al obtener los datos del clima.");
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchClima();
    };

    return {
        city,
        dataClima,
        error,
        handleChange,
        handleSubmit,
        difKelvin
    };
};

export default useWeatherData;