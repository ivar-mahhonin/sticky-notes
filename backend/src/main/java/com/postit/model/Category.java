package com.postit.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Category {
    private
    @Id
    @GeneratedValue
    @Column(name = "category_id")
    Long id;

    @Size(min = 1, max = 200)
    @NotEmpty(message = "Category name is required")
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Set<Note> notes = new HashSet<>();

    public Category() {
    }

    public Category(String name) {
        this.name = name;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Note> getNotes() {
        return this.notes;
    }

    public void setNotes(Set<Note> notes) {
        this.notes = notes;
    }

    public void addNote(Note note) {
        this.notes.add(note);
        note.setCategory(this);
    }

    public void removeNote(Note note) {
        this.notes.remove(note);
        note.setCategory(null);
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + this.id +
                ", text='" + this.notes.stream().map(Note::toString) +
                '}';
    }
}

