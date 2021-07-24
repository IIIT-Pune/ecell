import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PreferenceButton from "./preference-button";
import Options from "./options";
import { db } from "../firebase";
import { useState } from "react";
import '../form_style.css';

function RightCard() {
  const timestamp = new Date().toLocaleTimeString();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnum, setContact] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("recentData")
      .add({
        timestamp: timestamp,
        name: name,
        email: email,
        contactNumber: cnum,
        academicYear: document.querySelector(
          'input[name="choose-acad-year"]:checked'
        ).id,
        preference1: document.getElementById("Choice 1").value,
        preference2: document.getElementById("Choice 2").value,
        preference3: document.getElementById("Choice 3").value,
        message: message,
      })
      .then(() => {
        // setLoader(false);
        alert("Your form has been submitted successfully.👍");
      });
  };
  return (
    <div className="card-2">
      <form onSubmit={handleSubmit}>
        <span className="req"> Marked Fields Are Required !</span>
        <section>
          <span className="req-field">Your Details</span>
          <div className="fields">
            <div className="field">
              <div className="icon-box">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUser} className="icon" />
                </label>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="input-box"
                placeholder="Name"
                required
              />
            </div>
            <div className="field">
              <div className="icon-box">
                <label htmlFor="phone">
                  <FontAwesomeIcon icon={faPhone} className="icon" />
                </label>
              </div>
              <input
                value={cnum}
                onChange={(e) => setContact(e.target.value)}
                type="tel"
                className="input-box"
                name="phone"
                id="phone"
                placeholder="Contact No."
                pattern="[0-9]{10}"
                required
                length="10"
              />
            </div>
          </div>
          <div className="field">
            <div className="icon-box">
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </label>
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="input-box"
              required
              placeholder="E-Mail"
            />
          </div>
        </section>
        <section>
          <span className="req-field">Academic Year</span>
          <div className="fields">
            <Options />
          </div>
        </section>
        <section>
          <span className="req-field">Preferences</span>
          <div className="fields">
            <PreferenceButton name="Choice 1" />
            <PreferenceButton name="Choice 2" />
            <PreferenceButton name="Choice 3" />
          </div>
        </section>
        <section>
          <span className="last-question">
            <label htmlFor="text-box">
              What will you bring on the table for E-Cell? Feel free to add
              links to your previous works also.
            </label>
          </span>
          <div className="fields">
            <textarea id="text-box" name="purpose" value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
        </section>
        <button type="submit">SUBMIT MY APPLICATION</button>
      </form>
    </div>
  );
}

export default RightCard;
