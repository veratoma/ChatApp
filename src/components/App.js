import './App.css';
import {Message} from './Message';

const myText = 'Let me introduce myself. My name is Mariya I am a 20-year-old student from Donetsk. I study at the university in my native town and my future profession is bookkeeping. I live with my parents and my elder sister Lena. We are a friendly family. Lena is 2 years older than me. We share our room and tell all our secrets to each other.';

export const App = function (props) {
  return (
    <div className="App">
      <header className="App-header">
        My First React App
        <Message text={myText} />
      </header>
    </div>
  );
}


