import type { Note } from "./types";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div>
<<<<<<< HEAD
      {notes.map((note) => (
        <div key={note.id} style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
          {note.text}
        </div>
      ))}
=======
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((n) => (
            <li key={n.id}>{n.text}</li>
          ))}
        </ul>
      )}
>>>>>>> feature/VERSION2.0
    </div>
  );
}
