
import './App.css';
import Header from './components/Header'; 
import SearchBox from './components/SearchBox';
import Form from './components/Form';
import NotesList from './components/NotesList';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBox />
      <Form/>
      <NotesList />
    </div>
  );
}

export default App;
