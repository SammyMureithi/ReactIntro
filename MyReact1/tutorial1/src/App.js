import logo from './logo.svg';
import './App.css';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
     {/*<PortalDemo></PortalDemo>
       <ErrorBoundry>
     <Hero heroName='Batman'></Hero>
     </ErrorBoundry>
     <ErrorBoundry>
     <Hero heroName='Joker'></Hero>
     </ErrorBoundry>
      <ClickCounter></ClickCounter>
     */}
     <UserProvider value="Sammy">
<ComponentC></ComponentC>
</UserProvider>
    </div>
  );
}

export default App;
