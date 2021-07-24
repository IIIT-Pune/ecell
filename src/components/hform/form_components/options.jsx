import React from 'react';
import acadYears from "../acad-year";
import '../form_style.css';

function Options() {
  function Option(data) {
    return (
      <label className="radio">
        <input type="radio" name={data.name} id={data.id} required />
        <span>{data.option}</span>
      </label>
    );
  }

  return acadYears.map(Option);
}

export default Options;
