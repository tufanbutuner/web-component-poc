import "./App.css";

function App() {
  const type = "error";

  return (
    <>
      <p>TEST APP</p>
      <status-tag status="Renamed" />
      <banner-component
        type={type}
        header="Success Header"
        content="Success Content"
      />
    </>
  );
}

export default App;
