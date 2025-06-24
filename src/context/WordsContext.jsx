// src/context/UsersContext.jsx
import React, { createContext, useContext, useState } from "react";

// יצירת הקונטקסט
const WordsContext = createContext(null);

// הקומפוננט שמספק הקשר
export function WordsProvider({ children }) {
  // מערך שבו נשמרים המשתמשים באופן גלובאלי
  const [words, setWords] = useState([]);
  const [wordNum, setWordNum] = useState(0);
  const [playerDetails, setPlayerDetails] = useState({
    playerName: "שם משתמש",
    playerScore: "0",
    playerLanguage: "שפה",
    numOfQuestion: "?/10",
    topic: "נושא",
  });

  const generateStringToArr = (rawString) => {
    debugger
    const cleanString = rawString.replace(/\\n/g, "").replace(/\\"/g, '"');
    console.log(cleanString);
    if (cleanString.startsWith('"') && cleanString.endsWith('"')) {
      cleanString = cleanString.slice(1, -1);
    }
    let parsed;
    try {
      parsed = JSON.parse(cleanString);
      console.log(parsed);
    } catch (e) {
      console.error("שגיאה בפענוח JSON:", e);
    }
    return parsed;
  };

  const parseStringToJSON = (input) => {
    return input.split(",").map((item) => {
      const [word, isCorrect] = item.split("|");

      return {
        key: word.trim(), //המפתח - מילה
        value: isCorrect.trim().toUpperCase() === "TRUE", //האם נכון
      };
    });
  };

  // כדאי להציג באופן ברור אילו ערכים הקונטקסט מספק
  const value = {
    words,
    setWords,
    wordNum,
    setWordNum,
    generateStringToArr,
    parseStringToJSON,
    playerDetails,
    setPlayerDetails,
  };

  return (
    <WordsContext.Provider value={value}>{children}</WordsContext.Provider>
  );
}

// Hook לשימוש בקונטקסט באופן קל ונוח
export function useWords() {
  return useContext(WordsContext);
}
