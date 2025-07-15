import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import {
  ShoppingCart,
  Star,
  AccessTime,
  CurrencyRupee,
  Person,
} from "@mui/icons-material";

const courses = [
  {
    id: 1,
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description:
      "Build circuits & smart projects like alarms, weather stations, etc",
    level: "Intermediate",
    language: "English",
    classes: "4 classes",
    age: "7–10 yrs",
    duration: "45",
    price: "299",
    learners: "200+",
    rating: "4.9",
    image: "/assets/sci-fi.avif",
  },
  {
    id: 2,
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description:
      "Build circuits & smart projects like alarms, weather stations, etc",
    level: "Intermediate",
    language: "English",
    classes: "4 classes",
    age: "10-15 yrs",
    duration: "45",
    price: "299",
    learners: "200+",
    rating: "4.9",
    image: "/assets/student7sci.jpg",
  },
  {
    id: 3,
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description:
      "Build circuits & smart projects like alarms, weather stations, etc",
    level: "Intermediate",
    language: "English",
    classes: "4 classes",
    age: "7–10 yrs",
    duration: "45",
    price: "299",
    learners: "200+",
    rating: "4.9",
    image: "/assets/student8sci.jpg",
  },
  {
    id: 4,
    title: "Summer robotics camp: fun projects with auto arduino, Tink...",
    description:
      "Build circuits & smart projects like alarms, weather stations, etc",
    level: "Intermediate",
    language: "English",
    classes: "4 classes",
    age: "7–10 yrs",
    duration: "45",
    price: "299",
    learners: "200+",
    rating: "4.9",
    image: "/assets/sci-fi.avif",
  },
];

const CourseCard = ({ course }) => (
  <Card
    sx={{
      width: 250,
      borderRadius: 4,
      boxShadow: "0 0 12px rgba(0,0,0,0.08)",
      transition: "transform 0.3s ease",
      "&:hover": {
        transform: "scale(1.03)",
      },
      position: "relative",
    }}
  >
    {/* Selling fast badge */}
    {course.id === 1 && (
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 0,
          bgcolor: "#f7931e",
          color: "white",
          px: 1.5,
          py: 0.5,
          borderTopLeftRadius: 8,
          borderBottomRightRadius: 8,
          fontSize: "0.75rem",
          fontWeight: "bold",
          zIndex: 2,
        }}
      >
        Selling Fast
      </Box>
    )}

    <CardMedia
      component="img"
      height="160"
      image={course.image}
      alt="Course thumbnail"
    />

    <CardContent>
      <Stack direction="row" spacing={1} mb={1}>
        <Chip label={course.language} variant="outlined" size="small" />
        <Chip
          label={course.level}
          color="error"
          variant="outlined"
          size="small"
        />
        <Chip
          label={course.classes}
          color="warning"
          variant="outlined"
          size="small"
        />
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

const NewLaunch = () => {
  return (
    <Box
      sx={{
        padding: 4,
        background: "linear-gradient(to bottom right, #f4f2fc, #f6f7fd)",
      }}
    >
      {/* New Launches */}
      <Typography variant="h4" textAlign="center" fontWeight={700} mb={1}>
        New Launches ⭐
      </Typography>
      <Typography variant="h6" textAlign="center" mb={3} fontWeight={400}>
        Our most loved courses that kids absolutely adore!
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 3,
          px: 2,
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari
          },
        }}
      >
        {courses.map((course) => (
          <Box
            key={course.id}
            sx={{
              scrollSnapAlign: "start",
              flex: "0 0 auto",
              textAlign: "center",
            }}
          >
            <Typography variant="body2" fontSize="0.8rem" mb={1}>
              <Star sx={{ color: "#fdd835", fontSize: 16 }} /> {course.rating} |{" "}
              {course.learners} learners
            </Typography>
            <CourseCard course={course} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default NewLaunch;
