// src/api/openaiApi.js
import openaiClient from "./api";

/** קבלת תגובה ממודל השפה */
async function generateChatCompletion(prompt) {
  const response = await openaiClient.post("/chat/completions", {
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return response.data.choices[0].message.content.trim();
}

/** קבלת תמונה ממודל DALL·E */
async function getWordsList(prompt) {
  console.log(prompt);
  debugger;
  const response = await openaiClient.post("/chat/completions", {
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  // הפלט הוא טקסט, לדוגמה: "פרחים, עצים, עלים, גינה, טבע..."
  return response.data.choices[0].message.content.trim();
}
const openaiApi = {
  getWordsList,
};
export default openaiApi;
