import { useState } from "react";
import React from "react";


function Dropsdown() {
        const [selectedOptions, setSelectedOptions] = useState(false);
        const options = [  
            'JSS 1',
            'JSS 2',
            'JSS 3',
            'SS 1',
            'SS 2',
            'SS 3',
        ];
  return (
    <div className="Dropsdown">
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


export default Dropsdown
