import './App.css';

import Form from './components/Form';
import PreviewWindow from './components/PreviewWindow';
import SectionsSelectionsLists from './sectionsLists/SectionsSelectionsLists';
import Header from './components/Header';
function App() {
  return (
    <div className='App'>
      <Header />
      <SectionsSelectionsLists />
      <Form />

      <PreviewWindow />
    </div>
  );
}

export default App;
