import DrumPad from "./DrumPad";
import { useState } from "react";
import Switch from "./Switch";

const DrumMachine = () => {
	const [state, setState] = useState<{ kit: string; display: string }>({
		kit: "heaterKit",
		display: "Heater Kit",
	});

	const onChangeHandler = () => {
		setState((prevState) => {
			return {
				kit: prevState.kit === "heaterKit" ? "smoothPianoKit" : "heaterKit",
				display: prevState.kit === "heaterKit" ? "Smooth Pianot Kit" : "Heater Kit",
			};
		});
	};

	const updateDisplay = (value: string) => {
		setState((prevState) => ({ ...prevState, display: value }));
	};

	return (
		<div id="drum-machine">
			<div id="pad-bank">
				<DrumPad kit={state.kit} updateDisplay={updateDisplay} />
			</div>
			<p id="display">{state.display}</p>
			<Switch onChange={onChangeHandler} />
		</div>
	);
};

export default DrumMachine;
