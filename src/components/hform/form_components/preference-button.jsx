import React from 'react';
import '../form_style.css';

function PreferenceButton(props) {
  return (
    <select id={props.name} required>
      <option value="" selected="selected" disabled hidden>
        {props.name}
      </option>
      <option value="front-end">Front-End-Developer</option>
      <option value="back-end">Back-End-Developer</option>
      <option value="designer">Designer</option>
      <option value="content">Content Writer</option>
      <option value="video">Video Editor</option>
      <option value="business">Business Planning</option>
    </select>
  );
}

export default PreferenceButton;
