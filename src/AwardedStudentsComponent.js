import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AwardedStudentsComponent() {
  const [subject, setSubject] = useState('');
  const [percentage, setPercentage] = useState(0);
  const [awardedStudents, setAwardedStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/awarded-students?subject=${subject}&percentage=${percentage}`)
      .then(response => setAwardedStudents(response.data));
  }, [subject, percentage]);

  return (
    <div>
      <h2>Awarded Students</h2>
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject" />
      <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} placeholder="Enter Percentage" />
      <ul>
        {awardedStudents.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AwardedStudentsComponent;