import './Message.css';

export const Message = function(props) {
  return (
    <div className="Message">
      <header className="Message-header">
        <h4> {props.text}</h4>
      </header>
    </div>
  );
}


