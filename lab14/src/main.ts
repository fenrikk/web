import express, { Request, Response } from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

interface LocationData {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
}

app.get('/getWeather', async (req: Request, res: Response) => {
    try {
        const { ip } = req.query;

        if (!ip) {
            return res.status(400).json({ error: 'IP parameter is required' });
        }

        // Get location data from IP-API
        const locationResponse = await axios.get<LocationData>(`http://ip-api.com/json/${ip}`);
        const locationData = locationResponse.data;

        if (locationData.status !== 'success') {
            return res.status(400).json({ error: 'Failed to get location data' });
        }

        // Get weather data from meteoblue
        const weatherResponse = await axios.get(
            `https://my.meteoblue.com/packages/current?apikey=${process.env.WEATHER_API_KEY}&lat=${locationData.lat}&lon=${locationData.lon}&asl=284&format=json`
        );

        // Combine location and weather data
        const response = {
            location: locationData,
            weather: weatherResponse.data
        };

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 