package com.postit.controller;

import java.util.List;

import com.postit.exceptions.NoteNotFoundException;
import com.postit.model.Note;
import com.postit.repository.NotesRepository;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping(path = "api/")
class NoteController {
    private final NotesRepository repository;

    NoteController(NotesRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/notes")
    List<Note> all() {
        return repository.findAll();
    }

    @PostMapping("/notes")
    Note newNote(@RequestBody @Valid Note newNote) {
        return repository.save(newNote);
    }

    @GetMapping("/notes/{id}")
    Note one(@PathVariable Long id) {
        return repository
                .findById(id)
                .orElseThrow(() -> new NoteNotFoundException(id));
    }

    @PutMapping("/notes/{id}")
    Note replaceNote(@RequestBody @Valid Note newNote, @PathVariable Long id) {
        return repository.findById(id)
                .map(note -> {
                    note.setText(newNote.getText());
                    return repository.save(note);
                }).orElseGet(() -> {
                    newNote.setId(id);
                    return repository.save(newNote);
                });
    }

    @DeleteMapping("/notes/{id}")
    void deleteNote(@PathVariable Long id) {
        repository.deleteById(id);
    }
}