import React from 'react';
import "../styles/note.css";

function Note({ note, onDelete }) {
    const formattedDate = note.created_at
        ? new Date(note.created_at).toLocaleString()
        : note.date || "";

    return (
        <div className="note-container">
            <div className="note-header">
                <p className="note-title">{note.title}</p>
                <button className="note-delete-button" onClick={() => onDelete(note.id)}>
                    Delete
                </button>
            </div>
            <p className="note-content">{note.content}</p>
            {formattedDate && <p className="note-date">{formattedDate}</p>}
        </div>
    );
}

export default Note;
