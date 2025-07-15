package com.example.coursesearch.service;

import java.util.Map;

public interface SearchService {
    Map<String, Object> search(
        String q,
        String category,
        String type,
        Integer minAge,
        Integer maxAge,
        Double minPrice,
        Double maxPrice,
        String startDate,
        String sort,
        int page,
        int size
    );
}
