import logo from "./logo.svg";
import "./App.css";
import ActionComponent from "./Action";
import ProfileComponent from "./Profile";
import TopicComponent from "./Topic";
import { HeaderGHB, Card as CardComponent } from './component/layout'

function App() {
  return (
    <div className="App">
      <HeaderGHB />
      <div className="content">
          <ProfileComponent />
          <TopicComponent />
          <CardComponent />
      </div>
    </div>
  );
}

export default App;
