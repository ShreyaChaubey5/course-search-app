// src/components/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { results = [], query = '' } = location.state || {};

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Search Results for "<span className="text-purple-600">{query}</span>"
      </h2>

      {results.length === 0 ? (
        <p className="text-gray-500 text-lg">No courses found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Optional: Use course.image if available */}
              <div className="h-40 bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                {course.title.charAt(0).toUpperCase()}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {course.description}
                </p>

                {/* Optional fields */}
                {course.price && (
                  <p className="text-purple-600 font-semibold mb-2">₹{course.price}</p>
                )}

                <button className="mt-auto w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
