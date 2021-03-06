import './App.css';
import Greet from './componenets/Greet'
import Welcome from './componenets/Welcome'
import Hello from './componenets/Hello'
import Message from './componenets/Message'
import Counter from './componenets/Counter'
import EventBind from './componenets/EventBind'
import ParentComponent from './componenets/ParentComponent'
import Stylesheet from './componenets/Stylesheet'
import Inline from './componenets/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './componenets/Form'
import Fragment from './componenets/Fragments'
import ParentComponent1 from './componenets/ParentComponent1'
import Hero from './componenets/Hero'
import ErrorBoundary from './componenets/ErrorBoundary'
import ClickCounter from './componenets/ClickCounter'
import HoverCounter from './componenets/HoverCounter';
import ComponentC from './componenets/ComponentC';
import { UserProvider } from './componenets/userContext'

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>TestHero children props</p>
        <p>SuperHero children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman"></Greet>
      <Greet name="Diana" heroName="Wonder Woman"></Greet> */}
      {/* <Welcome></Welcome>
      <Hello></Hello> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <Stylesheet condition={true}></Stylesheet> */}
      {/* <Inline></Inline> */}
      {/* <Form></Form> */}
      {/* <Fragment></Fragment> */}
      {/* <ParentComponent1></ParentComponent1> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
        <Hero heroName="Superman"></Hero>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary> */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

     <UserProvider value="Batman">
      <ComponentC></ComponentC>
      </UserProvider>
    </div>
  );
}

export default App;
