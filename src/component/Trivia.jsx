import React, { useEffect, useState } from "react";
import { useWords } from "../context/wordsContext";
import openaiApi from "../apiConfig/openAIApi";

export default function Trivia() {
  const { words, wordNum, setWordNum, generateStringToArr, parseStringToJSON } =
    useWords();
  const [translateWords, setTranslateWords] = useState([]);
  const [score, setScore] = useState(0);
  //`תביא לי 4 מילים באנגלית שמתרגמות אוכל כשרק אחת מהן היא התרגום של ${words[wordNum]} נפרדות בפסיק ללא רווחים, ללא משפטים נוספים`
  // const prompt =`תביא לי 4 מילים באנגלית(!) שמתרגמות אוכל, באופן שבו כל מילה מופיעה באופן זה: מילה|TRUE למילה הנכונה, מילה|FALSE לשגויה. הפרד בפסיקים ללא רווחים, ללא משפטים נוספים. המילה הנכונה תהיה תרגום מדויק למילה${words[wordNum]}.`;
  const checkIfCorrect = async (isWordCorrect) => {
    console.log(isWordCorrect);

    if (isWordCorrect) {
      setWordNum(wordNum + 1);
      setScore(score + 1);
    }
  };
  const getTranslate = async () => {
    debugger;
    try {
      const res = await openaiApi.getWordsList(prompt);
      const wordsJSON = parseStringToJSON(res);
      setTranslateWords(wordsJSON);
      console.log(words);
    } catch (error) {
      console.error(error);
      console.log("אירעה שגיאה בקבלת תגובה מ-OpenAI");
    } finally {
    }
  };

  useEffect(() => {
    // getTranslate();
    console.log(words);
    debugger;
  }, [words]);
  return (
    <div>
      <div>{score}</div>
      {words && <div>{words[wordNum].hebrew}</div>}
      {words && (
        <div>
          {words[wordNum]?.options?.map((item, index) => (
            <button
              onClick={() => checkIfCorrect(item.correct)}
              key={index}
            >{`${index}:${item.text}`}</button>
          ))}
        </div>
      )}
    </div>
  );
}
