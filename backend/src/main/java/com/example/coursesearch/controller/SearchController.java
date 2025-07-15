package com.example.coursesearch.controller;

import com.example.coursesearch.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/search")
public class SearchController {

    private final SearchService searchService;

    @Autowired  
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    @GetMapping
    public Map<String, Object> searchCourses(
        @RequestParam(required = false) String q,
        @RequestParam(required = false) String category,
        @RequestParam(required = false) String type,
        @RequestParam(required = false) Integer minAge,
        @RequestParam(required = false) Integer maxAge,
        @RequestParam(required = false) Double minPrice,
        @RequestParam(required = false) Double maxPrice,
        @RequestParam(required = false) String startDate,
        @RequestParam(defaultValue = "upcoming") String sort,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size
    ) {
        return searchService.search(q, category, type, minAge, maxAge, minPrice, maxPrice, startDate, sort, page, size);
    }
}
