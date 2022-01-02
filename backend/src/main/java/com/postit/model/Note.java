package com.postit.model;

import java.util.Objects;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Note {
    private
    @Id
    @GeneratedValue
    Long id;

    private String text;

    public Note() {
    }

    public Note(String text) {
        this.text = text;
    }

    public Long getId() {
        return this.id;
    }

    public String getText() {
        return this.text;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Note))
            return false;
        Note note = (Note) o;
        return Objects.equals(this.id, note.id) && Objects.equals(this.text, note.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.text);
    }

    @Override
    public String toString() {
        return "Note{" + "id=" + this.id + ", text='" + this.text + '}';
    }
}
