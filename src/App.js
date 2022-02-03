
import './App.css';
import Header from './components/Header'; 

import Form from './components/Form';
import NotesList from './components/NotesList';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Form/>
      <NotesList />
    </div>
  );
}

export default App;
