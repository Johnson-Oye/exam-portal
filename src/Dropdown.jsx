import { useState } from "react";
import React from "react";


function Dropdown() {
        const [selectedOptions, setSelectedOptions] = useState(false);
        const options = [
            '2022/23',
            '2023/24',
            '2024/25',
            '2025/26',
            '2026/27',
            '2027/28',
            '2028/29',
            '2029/30',
            '2030/31',
            '2031/32',
            '2032/33',
            '2033/34',
        ];
  return (
    <div className="Dropdown">
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


export default Dropdown
