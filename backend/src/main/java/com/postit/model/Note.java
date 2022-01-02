package com.postit.model;

import java.util.Date;
import java.util.Objects;
import javax.persistence.*;

@Entity
public class Note {
    private
    @Id
    @GeneratedValue
    Long id;

    private String text;
    private Date created;
    private Date modified;

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

    public Date getModified() {
        return this.modified;
    }

    public Date getCreated() {
        return this.created;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    @PreUpdate
    public void setModified() {
        this.modified = new Date();
    }

    @PrePersist
    public void setCreated() {
        this.modified = new Date();
        this.created = new Date();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Note))
            return false;
        Note note = (Note) o;
        return Objects.equals(this.id, note.id)
                && Objects.equals(this.text, note.text)
                && Objects.equals(this.created, note.created)
                && Objects.equals(this.modified, note.modified);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id, this.text);
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + this.id +
                ", text='" + this.text +
                ", created='" + this.created +
                ", modified='" + this.modified +
                '}';
    }
}
