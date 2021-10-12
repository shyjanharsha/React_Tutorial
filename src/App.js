import logo from './logo.svg';
import './App.css';
//  if we import the export default Greet file on Components folder.and also we change the componet name {Ex:Greet to MyGreet}
 import MyGreet from './Components/Greet'
//  import {Greet} from './Components/Greet' // Named Export define as same name of the components 
import Welcome from './Components/Welcome'
// its called stateless functional components
// import Hello from './Components/Hello'
import Message from './Components/Message'
// import Message from './Components/Message';

function App() {
  return (
    <div className="App">
        {/* <MyGreet name = "shyjan" age = "45"/>
        <MyGreet name = "harsha"/> */}
        <Message />
        {/* <Hello />  */}
    </div>
  );
}

export default App;
