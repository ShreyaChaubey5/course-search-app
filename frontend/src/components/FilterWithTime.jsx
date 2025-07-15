// import React from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { ShoppingCart, Sun, Moon, Star } from "lucide-react";
// import '../index.css';

// const FilterWithTime = () => {
//   const timeSlots = [
//     { label: "Morning classes", time: "8am - 12pm", icon: <Sun /> },
//     { label: "Afternoon classes", time: "12pm - 4pm", icon: <Sun className="fill-black" /> },
//     { label: "Evening classes", time: "4pm - 8pm", icon: <Moon /> },
//     { label: "Late evening classes", time: "8pm - 11pm", icon: <Moon className="fill-black" /> },
//   ];

//   const course = {
//     language: "English",
//     level: "Intermediate",
//     time: "Morning class",
//     title:
//       "Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing",
//     instructor: "Daniel James",
//     rating: 4.9,
//     learners: "200+ learners",
//     age: "7-10 yrs",
//     duration: 45,
//     price: 299,
//     image: "sci-fi.avif", // replace with actual image
//   };

//   return (
//     <div className="time-filter p-6 ">
//       <h1 className="text-4xl font-bold text-center mb-2">Filter with Time</h1>
//       <p className="text-center text-lg mb-8">
//         Choose the perfect time that fits your child's schedule
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
//         {timeSlots.map((slot, idx) => (
//           <Card key={idx} className="flex flex-col items-center p-4">
//             <div className="text-xl font-semibold">{slot.label}</div>
//             <div className="text-sm text-gray-500">{slot.time}</div>
//             <div className="icon mt-2 text-3xl">{slot.icon}</div>
//           </Card>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {[...Array(2)].map((_, idx) => (
//           <Card key={idx} className="flex flex-col items-center p-4 transition-colors duration-200 hover:bg-gray-100 cursor-pointer">
//             {idx === 0 && (
//               <div className="absolute top-0 left-0 bg-orange-500 text-white text-xs px-2 py-1 z-10">
//                 Selling Fast
//               </div>
//             )}
//             <div className="flex gap-4">
//               <img
//                 src={course.image}
//                 alt="Course"
//                 className="w-1/3 object-cover"
//               />
//               <CardContent className="p-4 w-2/3">
//                 <div className="flex gap-2 mb-2">
//                   <span className="text-xs bg-yellow-100 px-2 py-1 rounded-full">
//                     {course.language}
//                   </span>
//                   <span className="text-xs bg-red-100 px-2 py-1 rounded-full">
//                     {course.level}
//                   </span>
//                   <span className="text-xs bg-blue-100 px-2 py-1 rounded-full">
//                     {course.time}
//                   </span>
//                 </div>
//                 <h2 className="font-semibold text-lg mb-2 line-clamp-2">
//                   {course.title}
//                 </h2>
//                 <div className="text-sm text-gray-600 mb-2">
//                   By: <span className="font-medium">{course.instructor}</span>{" "}
//                   <span className="inline-flex items-center">
//                     <Star className="h-4 w-4 text-yellow-500 mx-1" />
//                     {course.rating} | {course.learners}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-4 text-sm text-gray-700">
//                   <span>👶 {course.age}</span>
//                   <span>⏱ {course.duration} mins</span>
//                   <span>₹ {course.price}</span>
//                 </div>
//                 <div className="flex justify-end mt-4">
//                   <Button size="icon">
//                     <ShoppingCart className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterWithTime;
import React from 'react';
import '../index.css';

const timeSlots = [
  { label: 'Morning classes', time: '8am – 12pm', icon: '☀️' },
  { label: 'Afternoon classes', time: '12pm – 4pm', icon: '☀️' },
  { label: 'Evening classes', time: '4pm – 8pm', icon: '🌙' },
  { label: 'Late evening classes', time: '8pm – 11pm', icon: '🌙' },
];

const TimeFilter = () => {
  return (
    <section className="time-filter">
      <h1>Filter with Time</h1>
      <p className="subtitle">Choose the perfect time that fits your child's schedule</p>
      <div className="time-options">
        {timeSlots.map((slot, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <div>
                <h2>{slot.label}</h2>
                <p>{slot.time}</p>
              </div>
              <div className="icon">{slot.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeFilter;
