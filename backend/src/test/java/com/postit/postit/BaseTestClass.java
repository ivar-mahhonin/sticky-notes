package com.postit.postit;

import com.postit.model.Note;
import com.postit.repository.NotesRepository;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.Collections;

@ActiveProfiles("test")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class BaseTestClass {
    HttpHeaders headers = new HttpHeaders();
    HttpEntity request;

    @Autowired
    NotesRepository repository;

    @BeforeAll
    public  void initRequest() {
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        request = new HttpEntity(headers);
    }

    @BeforeEach
    public void reinitDB() {
        repository.deleteAll();

        Note firstNote = new Note("Text1");
        Note secondNote = new Note("Text2");

        ArrayList<Note> notes = new ArrayList<>();
        notes.add(firstNote);
        notes.add(secondNote);

        repository.saveAll(notes);
    }
}
