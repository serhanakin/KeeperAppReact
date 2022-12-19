import './App.css';
import Header from './View/Header';
import Footer from './View/Footer';
import Note from './View/Note';
import notes from './Notes';

function createNotes(note) {
  return <Note 
    key={note.key}
    title={note.title}
    content={note.content}
  />
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
