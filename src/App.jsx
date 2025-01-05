import Clock_heading from "./components/clock_heading";
import Clock_mid from "./components/clock_mid";
import Clock_time from "./components/clock_time";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <center>
      <Clock_heading></Clock_heading>
      <Clock_mid></Clock_mid>
      <Clock_time></Clock_time>
    </center>
  );
}
export default App;
