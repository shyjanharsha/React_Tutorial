import logo from './logo.svg';
import './App.css';
//  if we import the export default Greet file on Components folder.and also we change the componet name {Ex:Greet to MyGreet}
 import MyGreet from './Components/Greet'
//  import {Greet} from './Components/Greet' // Named Export define as same name of the components 
import Welcome from './Components/Welcome'
// its called stateless functional components
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FiveCounter from './Components/FiveCounter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import RenElementVariable from './Components/RenElementVariable';
import RenTernery from './Components/RenTernery';
import ShortCircuitOperatorRender from './Components/ShortCircuitOperatorRender';
import NameList from './Components/NameList';
import Person from './Components/Person';
import StyleSheet from './Components/StyleSheet';
import InLine from './Components/InLine';
import './appStyle.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import UpdatingLifeCycle from './Components/UpdatingLifeCycle';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComponent'
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import CallBackRef from './Components/CallBackRef';
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
// import Message from './Components/Message';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Normal styleSheet</h1>
      <h1 className={styles.sucess}>css module styleSheet</h1> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <RenElementVariable /> */}
      {/* <RenTernery /> */}
      {/* <ShortCircuitOperatorRender /> */}
      {/* <NameList /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <InLine /> */}
      {/* <Person /> */}
      {/* <Form />  */}
      {/* <UpdatingLifeCycle /> */}
      {/* <FragmentDemo /> */}
      {/* <Table/> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <CallBackRef /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      <PortalDemo />
        {/* <MyGreet name = "shyjan" age = "45"/> */}
        {/* <MyGreet name = "harsha"/> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FiveCounter /> */}
        {/* <Hello />  */}
        {/* <Welcome name = "shyjann" no = "1" /> */}
    </div>
  );
}

export default App;
