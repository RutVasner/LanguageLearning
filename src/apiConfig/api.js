import axios from 'axios';

const openaiClient = axios.create({
    baseURL: 'https://api.openai.com/v1',
});

// להכניס טוקן באופן אוטומטי לכותרת בכל בקשה
openaiClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`;
    return config;
});

export default openaiClient;
