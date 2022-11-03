import './App.css';
import Contact from './pages/Contact';
import LinkContainer from './components/LinkContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  // Slack username ='Sammydepoj'
  return (
    <Router>
      <Routes>
      <Route path='/' element={<LinkContainer/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes> 
    </Router>
  );
}

export default App;
