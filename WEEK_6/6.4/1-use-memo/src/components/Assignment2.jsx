
// create a component that renders a large list of sentences and includes an input 
//field for filtering these items

// goal is to useMemo to optimize filtering process, ensuring list is only re calculated when necessary
// new to learn :- how to pass more than one value in dependency array

import React, { useState, useMemo } from "react";


const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(Math.random() * words.length)] + " ";
  }
  ALL_WORDS.push(sentence.trim());
}

export function Assignment2() {
  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredSentences = useMemo(()=>{
    return sentences.filter((x) => x.includes(filter))},
    [sentences, filter]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {filteredSentences.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </div>
  );
}
