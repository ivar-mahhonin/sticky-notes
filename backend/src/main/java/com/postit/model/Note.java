package com.postit.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import java.util.Date;
import java.util.Objects;
import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class Note {
    private
    @Id
    @GeneratedValue
    Long id;

    @Size(min = 1, max = 200)
    @NotEmpty(message = "Text is required")
    private String text;
    private Date created;
    private Date modified;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    public Note() {
    }

    public Note(String text) {
        this.text = text;
    }

    public Note(String text, Category category) {
        this.text = text;
        this.category = category;
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

    public Long getCategoryId(){
        return this.category.getId();
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @PreUpdate
    public void preUpdate() {
        this.modified = new Date();
    }

    @PrePersist
    public void preCreate() {
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
