package com.postit.postit;

import com.postit.controller.NoteController;
import com.postit.model.Note;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.assertj.core.api.Assertions.assertThat;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

class NoteControllerTests extends BaseTestClass {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private NoteController controller;


    @Test
    public void contextLoads() throws Exception {
        assertThat(controller).isNotNull();
    }

    @Test
    public void shouldReturnDefaultNotes() throws Exception {
        String url = String.format("http://localhost:%s/api/notes/", port);

        ResponseEntity<Note[]> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                request,
                Note[].class
        );

        Note[] notes = response.getBody();
        assert notes != null;
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(notes.length).isEqualTo(2);
    }

    @Test
    public void shouldCreateNote() throws Exception {
        ResponseEntity<Note> response = createNote("Created note");
        Note savedNote = response.getBody();
        assert savedNote != null;
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(savedNote.getText()).isEqualTo("Created note");
    }

    @Test
    public void shouldReturnNoteById() throws Exception {
        ResponseEntity<Note> response = createNote("Note123");
        Note savedNote = response.getBody();
        assert savedNote != null;

        ResponseEntity<Note> fetchedNoteResponse = getNoteById(savedNote.getId(), Note.class);
        Note fetchedNote = response.getBody();

        assertThat(fetchedNoteResponse.getStatusCodeValue()).isEqualTo(200);
        assertThat(fetchedNote.getText()).isEqualTo("Note123");
    }

    @Test
    public void shouldDeleteNote() throws Exception {
        ResponseEntity<Note> response = createNote("To be deleted note");
        Note savedNote = response.getBody();

        assert savedNote != null;
        String url = String.format("http://localhost:%s/api/notes/%s", port, savedNote.getId());

        ResponseEntity<String> deleteResponse = restTemplate.exchange(
                url,
                HttpMethod.DELETE,
                request,
                String.class
        );

        assertThat(deleteResponse.getStatusCodeValue()).isEqualTo(200);

        ResponseEntity<String> savedNoteCheckResponse = getNoteById(savedNote.getId(), String.class);
        assertThat(savedNoteCheckResponse.getStatusCodeValue()).isEqualTo(404);
    }

    private ResponseEntity<Note> createNote(String text){
        String url = String.format("http://localhost:%s/api/notes/", port);

        Note note = new Note(text);

        return restTemplate.postForEntity(
                url,
                note,
                Note.class
        );
    }

    private ResponseEntity getNoteById(Long id, Class responseClass) {
        String url = String.format("http://localhost:%s/api/notes/%s", port, id);

        return restTemplate.exchange(
                url,
                HttpMethod.GET,
                request,
                responseClass
        );
    }
}