import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <h1>Sticky Note Wall</h1>
      <NoteForm />
      <NoteList />
    </div>
  );
}

export default App;