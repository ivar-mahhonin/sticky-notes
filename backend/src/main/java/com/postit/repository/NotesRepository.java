package com.postit.repository;

import com.postit.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note, Long> {

}