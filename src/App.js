import React from 'react';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ReportCardComponent from './ReportCardComponent';
import AwardedStudentsComponent from './AwardedStudentsComponent';
import HomeComponent from './HomeComponent';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/report-card" element={<ReportCardComponent />} />
        <Route path="/awarded-students" element={<AwardedStudentsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;