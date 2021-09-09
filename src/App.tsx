import './App.css';
import Button from './Components/Button';
import Header from './Components/Header';
import Input from './Components/Input';
import Message from './Components/Message';
import Status from './Components/Status'

function App() {
  const personalDetails = {
    phoneNumber: "123456",
    age: 21
  }
  const friendsDetails = [
    {
      name: "John",
      age: 21,
    },
    {
      name: "Alex",
      age: 27
    }
  ];
  return (
    <div className="App">
      <Header>Type Script Learning</Header>
      <Message name="Arun"
        messageCount={10}
        isLoggedIn={true}
        details={personalDetails}
        friendsDetails={friendsDetails}
      />
      <Status statusMessage="loading" />
      <Message name="John"
        messageCount={12}
        isLoggedIn={true}
        details={personalDetails}
      />

      <Button handleClick={(e) => console.log(e)} />
      <Input value="" onHandleChange={(e) => console.log(e)} />

    </div>
  );
}

export default App;
