"use client";

import React, { useState } from 'react';
import UploadIcon from '../public/upload-icon.svg'; // Import SVG sebagai komponen React

const AdminPage = () => {
  const [fileTitle, setFileTitle] = useState('');
  const [fileList, setFileList] = useState([
    { no: 1, title: 'Sangkuriang.pdf', date: '2024/08/28' },
    // Add more file entries here
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  const handleSave = () => {
    console.log('Saving file with title:', fileTitle);
  };

  return (
    <div className="admin-form-container bg-admin p-6">
      <div className="form-container bg-white p-4 rounded shadow-md">
        <div className="form-group mb-6">
          <label htmlFor="file-title">First Message</label>
          <input
            type="text"
            id="file-title"
            placeholder="Hai, this is AI voice assistant, can I help you today?"
            value={fileTitle}
            onChange={(e) => setFileTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="upload-file">Upload File</label>
          <p style={{ fontSize: '12px', color: '#ccc' }}>
            Supported formats: PDF, CSV, DOCX
          </p>

          <div className="flex items-center space-x-2">
            <input
              type="file"
              id="upload-file"
              accept=".pdf,.csv,.docx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <label htmlFor="upload-file" className="upload-btn flex items-center cursor-pointer p-2 rounded">
              <UploadIcon className="admin-upload-icon w-6 h-6 mr-2 " />
              <span>Add File</span>
            </label>
          </div>
        </div>

        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save
        </button>
      </div>

      <div className="table-container mt-6">
        <label className="block mb-2">List Document</label>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">No.</th>
              <th className="border border-gray-300 p-2">File Name</th>
              <th className="border border-gray-300 p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {fileList.map((file, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{file.no}</td>
                <td className="border border-gray-300 p-2">{file.title}</td>
                <td className="border border-gray-300 p-2">{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;