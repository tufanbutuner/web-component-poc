// @ts-nocheck
import "./App.css";
import "./components/StatusTagComponent/StatusTagComponent";
import "./components/BannerComponent/BannerComponent";

function App() {
  return (
    <div className="App">
      <status-tag status="Renamed"></status-tag>
      <banner-component
        type="success"
        header="Success Header"
        content="Success Content"
      ></banner-component>
    </div>
  );
}

export default App;
