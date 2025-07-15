import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const ageGroups = [
  "1–2", "2–3", "3–4", "4–5", "5–6", "6–7",
  "7–8", "8–9", "9–10", "10–11", "11–12",
  "12–13", "13–14", "14–15", "15–16",
  "16–17", "17–18", "18–19", "19–20"
];

const colorMap = [
  "#FDC201", "#FDC201", "#FDC201", "#E2653E", "#E2653E", "#E2653E",
  "#D474F5", "#D474F5", "#D474F5", "#D474F5", "#D474F5",
  "#56CB99", "#56CB99", "#56CB99", "#56CB99",
  "#6CA5E7", "#6CA5E7", "#6CA5E7", "#6CA5E7"
];

const AgeFilter = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Box textAlign="center" py={5}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How Old Are You? 🎯
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Pick your age and find the perfect courses just for you! ✨
      </Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={3} gap={2}>
        {ageGroups.map((age, idx) => (
          <Button
            key={age}
            variant={selectedIndex === idx ? "contained" : "outlined"}
            onClick={() => setSelectedIndex(idx)}
            sx={{
              borderRadius: "12px",
              border: `2px solid ${colorMap[idx]}`,
              color: selectedIndex === idx ? "#fff" : colorMap[idx],
              backgroundColor: selectedIndex === idx ? colorMap[idx] : "transparent",
              px: 3,
              py: 1.5,
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: selectedIndex === idx ? colorMap[idx] : `${colorMap[idx]}22`,
              }
            }}
          >
            {age} Years
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default AgeFilter;
