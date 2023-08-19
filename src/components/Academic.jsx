import { useState } from "react";
import React from "react";
import "./Academic.css"

function Academic() {
        const [selectedOptions, setSelectedOptions] = useState(false);
        const options = [
            'First Term Academic Session',
            'Second Term Academic Session',
            'Third Term Academic Session',
        ];
  return (
    <div className="Academics">
      <select value={selectedOptions} onChange={event => setSelectedOptions(event.target.value)}>
        <option value="">Select an Option</option>
        {options.map((option, index) => 
        (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
    </div>
  
  )
}


export default Academic
