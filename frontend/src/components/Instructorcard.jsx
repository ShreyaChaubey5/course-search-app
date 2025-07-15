import React from 'react';

const InstructorCard = ({ name, subject, image }) => {
  return (
    <div className="teacher-card">
      <img src={image} alt={name} className="teacher-image" />
      <h3 className="teacher-name">{name}</h3>
      <p className="teacher-info">M.Sc, B.Ed | 15+ Years</p>
      <p className="teacher-info">1000+ Students</p>
      <span className="teacher-subject">{subject}</span>
    </div>
  );
};

export default InstructorCard;
