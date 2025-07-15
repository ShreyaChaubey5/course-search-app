import React from 'react';
import '../index.css';

import InstructorCard from './Instructorcard';

import andyBrewImg from '/assets/teacher1.jpg';
import janeDoeImg from '/assets/teacher2.jpg';
import johnSmithImg from '/assets/teacher3.jpg';

const teachers = [
  { name: 'Andy Brew', subject: 'Computer science', image: andyBrewImg },
  { name: 'Jane Doe', subject: 'English', image: janeDoeImg },
  { name: 'John Smith', subject: 'Early educator', image: johnSmithImg },
  { name: 'Alex Roe', subject: 'Coding', image: andyBrewImg },
  { name: 'Sara Lee', subject: 'Computer science', image: johnSmithImg },
  { name: 'Mark Moe', subject: 'Computer science', image: janeDoeImg },
];

const TopTeachers = () => {
  return (
    <section className="teachers-section">
      <h2 className="section-title">Learn from Top Teachers</h2>
      <p className="section-subtitle">
        Expert instructors who make learning fun and engaging for every child
      </p>
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <InstructorCard
            key={index}
            name={teacher.name}
            subject={teacher.subject}
            image={teacher.image}
          />
        ))}
      </div>
    </section>
  );
};

export default TopTeachers;
