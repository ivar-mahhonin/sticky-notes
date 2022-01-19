package com.postit.config;

import com.postit.model.Category;
import com.postit.model.Note;
import com.postit.repository.CategoryRepository;
import com.postit.repository.NotesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(NotesRepository noteRepository, CategoryRepository categoryRepository) {
        return args -> {
            List<Note> notes = noteRepository.findAll();
            if (notes.size() == 0) {

                Category defaultCategory = new Category("default");

                Note firstNote = new Note("Primis sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.");
                Note secondNote = new Note("Secundo sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.");

                defaultCategory.addNote(firstNote);
                defaultCategory.addNote(secondNote);

                log.info("Preloading " + categoryRepository.save(
                        defaultCategory
                ));

            }
        };
    }
}