package com.postit.controller;

import com.postit.exceptions.NoteNotFoundException;
import com.postit.model.Category;
import com.postit.repository.CategoryRepository;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "api/")
public class CategoryController {
    private final CategoryRepository repository;

    CategoryController(CategoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/categories")
    List<Category> all() {
        return repository.findAll();
    }

    @PostMapping("/categories")
    Category newCategory(@RequestBody @Valid Category newCategory) {
        return repository.save(newCategory);
    }

    @GetMapping("/categories/{id}")
    Category one(@PathVariable Long id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new NoteNotFoundException(id));
    }

    @PutMapping("/categories/{id}")
    Category replaceCategory(@RequestBody @Valid Category newCategory, @PathVariable Long id) {
        return repository.findById(id)
                .map(repository::save).orElseGet(() -> {
                    newCategory.setId(id);
                    return repository.save(newCategory);
                });
    }

    @DeleteMapping("/categories/{id}")
    void deleteCategory(@PathVariable Long id) {
        repository.deleteById(id);
    }
}