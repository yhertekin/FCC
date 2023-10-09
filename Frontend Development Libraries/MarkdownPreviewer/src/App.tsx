import { useState } from "react";
import "./App.css";
import Preview from "./components/Preview";
import Editor from "./components/Editor";

function App() {
	const [state, setState] = useState<string>("# Hello World!");
	return (
		<div className="container">
			<Editor setState={setState} state={state} />
			<Preview state={state} />
		</div>
	);
}

export default App;
