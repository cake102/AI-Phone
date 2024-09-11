"use client";

import React from "react";
import PhoneIcon from '../public/phone.svg'; // Import SVG sebagai komponen React
import PauseIcon from '../public/pause.svg'; // Import SVG sebagai komponen React

const AiPhone = () => {
  return (
    <div className="bg-ai-phone">
      <div className="form-container flex flex-col space-y-4">
        <form className="space-y-4">
          <div>
            <label htmlFor="nik" className="text-white">
              NIK
            </label>
            <input type="text" id="nik" placeholder="Input NIK..." />
          </div>
          <div>
            <label htmlFor="name" className="text-gray-300">
              Nama Lengkap
            </label>
            <input type="text" id="name" placeholder="Input Nama Lengkap..." />
          </div>
          <button type="submit" className="start-call-button">Start Call</button>
        </form>
      </div>
      <div className="call-buttons">
        <button className="call-button pause-button">
        <PauseIcon  />
        </button>
        <button className="call-button call-end-button">
          <PhoneIcon />
        </button>
      </div>
    </div>
  );
};

export default AiPhone;