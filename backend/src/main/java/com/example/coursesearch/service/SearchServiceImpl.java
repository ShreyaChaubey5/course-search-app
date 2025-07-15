package com.example.coursesearch.service;

import co.elastic.clients.elasticsearch.ElasticsearchClient;
import co.elastic.clients.elasticsearch.core.SearchRequest;
import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import co.elastic.clients.json.JsonData;

import java.io.IOException;
import java.util.*;

//import com.example.coursesearch.model.CourseDocuments;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private ElasticsearchClient esClient;

    @Override
    public Map<String, Object> search(
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
    ) {
        Map<String, Object> responseMap = new HashMap<>();
        List<Course> results = new ArrayList<>();

        try {
            SearchRequest.Builder searchBuilder = new SearchRequest.Builder()
                .index("courses")
                .from(page * size)
                .size(size);

            // Build base query
            searchBuilder.query(qb -> qb
                .bool(b -> {
                    // Must: match query
                    if (q != null && !q.isBlank()) {
                        b.must(m -> m.multiMatch(multi -> multi
                                .fields("title^3", "description", "level", "language")
                                .query(q)));
                    }

                    // Optional filters
                    if (minPrice != null || maxPrice != null) {
                        b.filter(f -> f.range(r -> r.field("price")
                            .gte(minPrice != null ? JsonData.of(minPrice) : null)
                            .lte(maxPrice != null ? JsonData.of(maxPrice) : null)));
                    }

                    if (minAge != null || maxAge != null) {
                        b.filter(f -> f.range(r -> r.field("ageNum")
                            .gte(minAge != null ? JsonData.of(minAge) : null)
                            .lte(maxAge != null ? JsonData.of(maxAge) : null)));
                    }

                    if (category != null && !category.isBlank()) {
                        b.filter(f -> f.term(t -> t.field("category.keyword").value(category)));
                    }

                    if (type != null && !type.isBlank()) {
                        b.filter(f -> f.term(t -> t.field("type.keyword").value(type)));
                    }

                    return b;
                })
            );

            SearchResponse<Course> esResponse = esClient.search(searchBuilder.build(), Course.class);

            for (Hit<Course> hit : esResponse.hits().hits()) {
                results.add(hit.source());
            }

            responseMap.put("results", results);
            responseMap.put("total", esResponse.hits().total().value());

        } catch (IOException e) {
            e.printStackTrace();
            responseMap.put("results", List.of());
            responseMap.put("error", "Search failed");
        }

        return responseMap;
    }
}
