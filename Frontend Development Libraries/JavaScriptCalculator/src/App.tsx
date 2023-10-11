import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import buttonList from "./buttonList";

interface IState {
	display: string;
	calculationText: string;
	reset: boolean;
}

const initialState: IState = {
	display: "0",
	calculationText: "",
	reset: false,
};

function App() {
	const [state, setState] = useState<IState>(initialState);

	const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const button = buttonList.find((item) => item.id == e.target?.id);
		console.log(button);

		switch (button?.type) {
			case "clear":
				setState(initialState);
				break;
			case "number":
				setState((prevState) => {
					if (prevState.reset) {
						return {
							reset: false,
							display: button.value,
							calculationText: button.value,
						};
					}
					if (prevState.calculationText == "0" && button.id == "zero") {
						return { ...prevState, reset: false };
					}
					if (prevState.calculationText[prevState.calculationText.length - 1] == ".") {
						return {
							reset: false,
							display: `${prevState.calculationText}${button.value}`,
							calculationText: `${prevState.calculationText}${button.value}`.replace(
								/0+(\d+)/g,
								"$1"
							),
						};
					}
					return {
						reset: false,
						display: button.value.replace(/0+(\d+)/g, "$1"),
						calculationText: `${prevState.calculationText}${button.value}`.replace(
							/0+(\d+)/g,
							"$1"
						),
					};
				});
				break;
			case "decimal":
				setState((prevState) => ({
					...prevState,
					display: `${prevState.calculationText}${button.value} `,
					calculationText: `${prevState.calculationText}${button.value}`,
				}));
				break;
			case "operation":
				setState((prevState) => {
					if (prevState.reset) {
						return {
							reset: false,
							display: button.value,
							calculationText: `${prevState.display} ${button.value} `,
						};
					}
					return {
						reset: false,
						display: button.value,
						calculationText: `${prevState.calculationText} ${button.value} `,
					};
				});
				break;
			case "equals":
				setState((prevState) => ({
					reset: true,
					display: eval(prevState.calculationText),
					calculationText: `${prevState.calculationText} ${button.value} ${eval(
						prevState.calculationText
					)}`,
				}));
				break;
		}
	};

	return (
		<>
			<div>
				<p id="calculationText">{state.calculationText}</p>
				<p id="display">{state.display}</p>
			</div>
			<div className="container">
				{buttonList.map((buttonValue) => (
					<Button
						id={buttonValue.id}
						key={buttonValue.id}
						value={buttonValue.value}
						onClick={clickHandler}
						className="button"
					/>
				))}
			</div>
		</>
	);
}

export default App;
