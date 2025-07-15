import React from 'react';
import '../index.css';
import { FaClock, FaShoppingCart } from 'react-icons/fa';


const sampleCourses = [
  {
    sellingFast: true,
    image: '/assets/student5.jpg',
    tags: ['English', 'Intermediate', 'Morning class'],
    title: 'Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing',
    instructor: {
      name: 'Daniel James',
      avatar: '/assets/teacher1.jpg'
    },
    rating: 4.9,
    learners: 200,
    ageGroup: '7-10 yrs',
    duration: 45,
    price: 299
  },
  {
    sellingFast: false,
    image: '/assets/student8sci.jpg',
    tags: ['English', 'Beginner', 'Evening class'],
    title: 'Creative Coding for Beginners',
    instructor: {
      name: 'Sarah Kim',
      avatar: '/assets/teacher2.jpg'
    },
    rating: 4.8,
    learners: 150,
    ageGroup: '8-12 yrs',
    duration: 50,
    price: 349
  }
];

const Summary = () => {
  return (
  <div className="course-row-container">
  {sampleCourses.map((course, index) => (
    <div className="course-card" key={index} style={{width:'1000px'}}>
      {course.sellingFast && <div className="badge">Selling Fast</div>}

      <img src={course.image} alt={course.title} className="course-image" />

      <div className="course-details">
        <div className="tags">
          {course.tags.map((tag, i) => (
            <span className={`tag ${tag.toLowerCase().replace(/\s+/g, '-')}`} key={i}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="course-title">{course.title}</h3>

        <div className="instructor">
          <img src={course.instructor.avatar} alt="Instructor" />
          <span>
            <strong>By:</strong> {course.instructor.name} ⭐ {course.rating} | {course.learners}+ learners
          </span>
        </div>

        <div className="course-meta">
          <span className="meta-item">{course.ageGroup}</span>
          <span className="meta-item"><FaClock /> {course.duration} mins</span>
          <span className="meta-item">₹{course.price}</span>
          <span className="meta-item cart"><FaShoppingCart /></span>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default Summary;

