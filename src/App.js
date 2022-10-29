import './App.css';
import userPic from '../src/components/assets/user.svg'
import share from '../src/components/assets/sharebtn1.svg'
import sharemobile from '../src/components/assets/sharebtn2.png'
import slack from '../src/components/assets/slack.svg'
import github from '../src/components/assets/Icon.svg'
import I4G from '../src/components/assets/I4G.svg'
import footerText from '../src/components/assets/Footer text.svg'
import zuriLogo from '../src/components/assets/zurilogo.svg'

function App() {
  // Slack username ='Sammydepoj'
  return (
    <div className="App">

      <div className="Header">
        <img className='share' title='Share' src={share} alt='share button' />
        <img className='share2' title='Share' src={sharemobile} alt=' share button' />

        <img id='profile__img' src={userPic} alt='profile pic' />
        <a className='userName' href='https://www.twitter.com/sammydepoj' title='link to my twitter handle' id='twitter'>Sammydepoj</a>
    </div>

      <p id='slack'>slack username: @Sammydepoj</p>

      <div className ="container">

      <div className = 'link-container'>
        <a className='links' href='https://www.twitter.com/sammydepoj' id='twitter' title='link to my twitter handle'>Twitter Link</a>
      </div>
      <div className = 'link-container'>
        <a className='links' href='https://books.zuri.team' id='books' title='Need a book to read in your free time or any other day? we got you. try us out today'>Zuri books</a>
      </div>
      <div className = 'link-container'>
        <a className='links' href='https://training.zuri.team' id='btn__zuri'title='we have a team that is willing to carry out your software development, check us out today.'>Zuri Team</a>
      </div>
      <div className = 'link-container'>
        <a className='links' href='https://books.zuri.team/python-for-beginners?ref_id=sammydepoj' id='book__python' title='The only place you get affordable, understandable and easy to read books for python. check this out, you wont regret it'>Python Books</a>
      </div>
      <div className = 'link-container'>
        <a className='links' href='https://backgroundcheck.zuri.team' id='pitch' title='Hiring just anyhow person as your coder is not good for your organization, let us help you to run some background checks on your prospective employes'>Background Check for Coders</a>
      </div>
      <div className = 'link-container'>
        <a className='links' href='https://books.zuri.team/design-rules' id='book__design' title='Need    books to read for better understanding of how to design? We have books that can help you for FREE '>Design Books</a>
      </div>
     
      </div>

      <div className='icons'>
        <a href='sammydepoj'id='slack-icon'><img src={slack} alt='slack-icon' /></a>

        <a href='https://github.com/Sammydepoj'id='github'><img src={github} alt='github-icon'/></a>
      </div>

      <div className='footer-icons'>
        <img src={zuriLogo} alt='zuri logo'/>
        <img src={footerText} alt='hng-task' />
        <img src ={I4G} alt='i4g logo' />
      </div>
      </div>
  );
}

export default App;
