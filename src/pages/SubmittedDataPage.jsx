import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmittedDataPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '80px',
    marginTop: "80px",
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle = {
    color: '#333',
    borderBottom: '2px solid #333',
    paddingBottom: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#555',
  };

  const infoContainerStyle = {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Submitted Summary</h2>
      <div style={infoContainerStyle}>
        <p style={paragraphStyle}><strong>Full Name:</strong> {formData.fullName}</p>
        <p style={paragraphStyle}><strong>Email:</strong> {formData.email}</p>
        <p style={paragraphStyle}><strong>Cover Letter:</strong> {formData.coverLetter}</p>
        <p style={paragraphStyle}><strong>Cover Letter:</strong> {formData.selectedFile}</p>

      </div>
    </div>
  );
};

export default SubmittedDataPage;
