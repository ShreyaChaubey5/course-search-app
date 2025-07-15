const BASE_URL = "http://localhost:8080"; 

export const searchCourses = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/api/search?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching from Spring Boot:", error);
    return [];
  }
};
