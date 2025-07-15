import React from "react";
import '../index.css';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Divider
} from "@mui/material";
import {
  ShoppingCart,
  Star,
  AccessTime,
  CurrencyRupee,
  Person
} from "@mui/icons-material";

// Sample webinars
const webinars = [
  {
    id: 1,
    title: "AI & Robotics: Beginner's Live Webinar",
    description: "Join a hands-on workshop on building AI robots for kids",
    level: "Beginner",
    language: "English",
    classes: "1-Day Webinar",
    age: "8-12 yrs",
    duration: "60 mins",
    price: "Free",
    learners: "500+",
    rating: "4.8",
    image: "/assets/student6.jpg"
  },
  {
    id: 2,
    title: "Design Thinking for Young Innovators",
    description: "Learn to ideate and create using design principles",
    level: "Intermediate",
    language: "English",
    classes: "1-Day Webinar",
    age: "10-15 yrs",
    duration: "60 mins",
    price: "Free",
    learners: "300+",
    rating: "4.7",
    image: "/assets/student8sci.jpg"
  },
  {
    id: 3,
    title: "3D Printing Magic: Kids Edition",
    description: "Discover how to bring your designs to life with 3D printing",
    level: "Beginner",
    language: "English",
    classes: "1-Day Webinar",
    age: "9-13 yrs",
    duration: "45 mins",
    price: "Free",
    learners: "200+",
    rating: "4.9",
    image: "/assets/student4.jpg"
  }
];

const CourseCard = ({ course }) => (
  <Card
    sx={{
      width: 290,
      borderRadius: 4,
      boxShadow: "0 0 12px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      '&:hover': {
        transform: "scale(1.03)"
      },
      position: 'relative'
    }}
  >
    <CardMedia
      component="img"
      height="160"
      image={course.image}
      alt="Course thumbnail"
    />
    <CardContent>
      <Stack direction="row" spacing={1} mb={1}>
        <Chip label={course.language} variant="outlined" size="small" />
        <Chip label={course.level} color="error" variant="outlined" size="small" />
        <Chip label={course.classes} color="primary" variant="outlined" size="small" />
      </Stack>
      <Typography fontWeight="bold" fontSize="0.95rem" gutterBottom noWrap>
        {course.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontSize="0.8rem">
        {course.description}
      </Typography>

      <Divider sx={{ my: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1} fontSize="0.8rem">
        <Person fontSize="small" /> {course.age}
        <AccessTime fontSize="small" /> {course.duration}
        <CurrencyRupee fontSize="small" /> {course.price}
        <Box flexGrow={1} />
        <ShoppingCart fontSize="small" />
      </Stack>
    </CardContent>
  </Card>
);

const WebinarSoon = () => {
  return (
    <Box sx={{ padding: 4, background: "#f6f7fd" }}>
      {/* Section Header */}
      <Typography variant="h4" textAlign="center" fontWeight={700} mb={1}>
        Webinars Starting in 24 Hours ⏰
      </Typography>
      <Typography variant="h6" textAlign="center" mb={3} fontWeight={400}>
        Join live events and level up your learning instantly!
      </Typography>

      {/* Horizontal Scroll Container */}
      <Box sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2,
        paddingY: 2,
        paddingX: 1,
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        {webinars.map((course) => (
          <Box key={course.id} sx={{ textAlign: "center", minWidth: 250 }}>
            <Typography variant="body2" fontSize="0.8rem" mb={1}>
              <Star sx={{ color: '#fdd835', fontSize: 16 }} /> {course.rating} | {course.learners} learners
            </Typography>
            <CourseCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WebinarSoon;
