import './App.css';
import Button from './components/Button';
import Footer from './components/Footer';
import Header from './components/Header';
import Socials from './components/Socials';

function App() {
  // Slack username ='Sammydepoj'
  return (
    <div className="App">
      <Header/>

      <input type={'text'} hidden id='slack' value={'Sammydepoj'} />

      <div className ="container">
      <Button text='Twitter Link' page = 'https://www.twitter.com/sammydepoj' identity = 'twitter'/>
      <Button text='Zuri books' page = 'https://books.zuri.team' identity = 'books'/>
      <Button text='Zuri Team' page = 'https://training.zuri.team' identity = 'btn_zuri'/>
      <Button text='Python Books' page = 'https://books.zuri.team/python-for-beginners?ref_id=sammydepoj' identity = 'book_python'/>
      <Button text='Background Check for Coders' page = 'https://backgroundcheck.zuri.team' identity = 'pitch'/>
      <Button text='Design Books' page = 'https://books.zuri.team/design-rules' identity = 'book_design'/>
      </div>

      <Socials/>
      <Footer/>
      
    </div>
  );
}

export default App;
