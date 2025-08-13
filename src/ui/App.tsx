import Button_archive from "./components/button_archive";
import Table from "./components/table";
import Button_calibrate from "./components/button_calibrate";
import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <Button_archive />
        <Button_calibrate />
      </div>
      <div className="table-container">
        <Table />
      </div>
    </>
  );
}

export default App;
