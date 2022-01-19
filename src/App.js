import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
	return (
		<div className="container my-4">
			<h1>CHART</h1>
			<LineChart />
			<BarChart />
		</div>
	);
}

export default App;
