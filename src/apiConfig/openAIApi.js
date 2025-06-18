// src/api/openaiApi.js
import openaiClient from './api';

/** קבלת תגובה ממודל השפה */
async function generateChatCompletion(prompt) {
    const response = await openaiClient.post('/chat/completions', {
        model: 'gpt-4',
        messages: [
            { role: 'user', content: prompt },
        ],
    });

    return response.data.choices[0].message.content.trim();
}

/** קבלת תמונה ממודל DALL·E */
async function getWordsList(topic) {
    const prompt = `תן לי רשימת מילים בנושא "${topic}" (מילים נפרדות, בלי הסברים):`;

    const response = await openaiClient.post('/chat/completions', {
        model: 'gpt-4',
        messages: [
            { role: 'user', content: prompt }
        ],
    });

    // הפלט הוא טקסט, לדוגמה: "פרחים, עצים, עלים, גינה, טבע..."
    return response.data.choices[0].message.content.trim();
}
const openaiApi = {
    getWordsList
}
export default openaiApi;
