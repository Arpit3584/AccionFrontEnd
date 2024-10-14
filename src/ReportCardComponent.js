import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReportCardComponent() {
  const [name, setName] = useState('');
  const [reportCard, setReportCard] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/report-card/${name}`)
      .then(response => setReportCard(response.data))
      .catch(error => console.error('Network error:', error));
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/report-card/${name}`)
      .then(response => setReportCard(response.data))
      .catch(error => console.error('Network error:', error));
  };

  return (
    <div>
      <h2>Report Card</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Student Name" 
        />
        <button type="submit">Submit</button>
      </form>
      {reportCard.name && (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total Marks</th>
              <th>Marks Obtained</th>
            </tr>
          </thead>
          <tbody>
            {reportCard.marks && reportCard.marks.map((mark, index) => (
              <tr key={index}>
                <td>{mark.subject}</td>
                <td>{mark.totalMarks}</td>
                <td>{mark.marksObtained}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReportCardComponent;