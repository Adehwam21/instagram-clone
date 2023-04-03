import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions-title">Suggestions for you</div>
      <div className="suggestions-usernames">
        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">jenny</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">ernest.AD</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">janet_harley</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="suggestions-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">kelly_peace</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;