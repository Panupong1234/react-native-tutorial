import logo from "./logo.svg";
import "./App.css";
import ActionComponent from "./Action";
import ProfileComponent from "./Profile";
import TopicComponent from "./Topic";

function App() {
  return (
    <div className="App">
      <div className="content">
        <ProfileComponent />
        <TopicComponent />
      </div>
    </div>
  );
}

export default App;
