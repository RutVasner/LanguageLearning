// src/context/UsersContext.jsx
import React, { createContext, useContext, useState } from "react";

// יצירת הקונטקסט
const WordsContext = createContext(null);

// הקומפוננט שמספק הקשר
export function WordsProvider({ children }) {
    // מערך שבו נשמרים המשתמשים באופן גלובאלי
    const [words, setWords] = useState([]);
    const [wordNum, setWordNum] = useState(0);

    const generateStringToArr = (words) => {
        return words.split(",").map((item) => item.trim()); // מסירה רווחים מיותרים
    }

    const parseStringToJSON = (input) => {
        return input.split(",").map((item) => {
            const [word, isCorrect] = item.split("|");

            return {
                key: word.trim(), //המפתח - מילה
                value: isCorrect.trim().toUpperCase() === "TRUE", //האם נכון
            };
        });
    }

    // כדאי להציג באופן ברור אילו ערכים הקונטקסט מספק
    const value = { words, setWords, wordNum, setWordNum, generateStringToArr, parseStringToJSON };

    return (
        <WordsContext.Provider value={value}>
            {children}
        </WordsContext.Provider>
    );
}

// Hook לשימוש בקונטקסט באופן קל ונוח
export function useWords() {
    return useContext(WordsContext);
}
