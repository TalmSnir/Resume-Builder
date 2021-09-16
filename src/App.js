import './App.css';

import Form from './components/Form';
import PreviewWindow from './components/PreviewWindow';
import SectionsSelectionsLists from './sectionsLists/SectionsSelectionsLists';
import Header from './components/Header';
import GlobalProvider from './GlobalState';
function App() {
  return (
    <GlobalProvider>
      <div className='App'>
        <Header />
        <SectionsSelectionsLists />
        <Form />

        <PreviewWindow />
      </div>
    </GlobalProvider>
  );
}

export default App;
