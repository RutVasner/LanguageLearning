import { useContext, useState } from 'react'
import openAIApi from "./apiConfig/openAIApi"
import { useWords } from './context/wordsContext'
import { useNavigate } from 'react-router'
import TopBar from './component/TopBar'
function App() {
  const { words, setWords, generateStringToArr } = useWords();
  const [topic, setTopic] = useState("אוכל");
  const prompt = `תן לי רשימה של 10 מילים קצרות בנושא ${topic}, נפרדות בפסיק ללא רווחים, ללא משפטים נוספים.`;
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await openAIApi.getWordsList(prompt);
      const wordsArr = generateStringToArr(res);
      setWords(wordsArr);
      console.log(words);
    } catch (error) {
      console.error(error);
      console.log('אירעה שגיאה בקבלת תגובה מ-OpenAI');
    } finally {
      navigate('trivia')
    }
  }
  return (
    <div id="app">
      <TopBar></TopBar>
      <button id="startBtn" onClick={getData}>התחלה</button>
    </div>
  )
}

export default App
