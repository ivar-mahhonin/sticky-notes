package com.postit.config;
import com.postit.model.Note;
import com.postit.repository.NotesRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

    @Bean
    CommandLineRunner initDatabase(NotesRepository repository) {
        return args -> {
            log.info("Preloading " + repository.save(new Note("Lorem Ipsum 1")));
            log.info("Preloading " + repository.save(new Note("Lorem Ipsum 2")));
        };
    }
}