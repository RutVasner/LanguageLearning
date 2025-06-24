export const getHebrewWordsPrompt = (playerDetails)=>`
 תן לי רשימה של 10 מילים בעברית לא בראשי תבות. בנושא${playerDetails.topic}
עבור כל מילה, צור אובייקט JSON שכולל את:
- "hebrew": המילה בעברית
- "options": מערך של 4 תרגומים ב${playerDetails.playerLanguage}. כל אחד מהם יהיה אובייקט עם:
  - "text": התרגום האפשרי
  - "correct": האם זו התשובה הנכונה (true או false)
סדר התשובות בכל מילה צריך להיות שונה ורנדומלי.

החזר JSON תקני בלבד, בלי הסברים, בלי עטיפה של markdown (כמו json), בלי תווי "\n". 
החזר רק את המחרוזת של JSON אחת שלמה.`;
