package com.postit.exceptions;
public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long id) {
        super("Could not find note " + id);
    }
}