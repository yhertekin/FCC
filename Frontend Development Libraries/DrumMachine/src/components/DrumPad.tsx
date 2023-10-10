import React, { useEffect, useState } from "react";
import { IKit, IMusicSet } from "./../../interfaces";
import data from "./../data.json";

const DrumPad = ({
	kit,
	updateDisplay,
}: {
	kit: string;
	updateDisplay: (value: string) => void;
}) => {
	const [state] = useState<IMusicSet>(data);

	const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.target?.children[0].play();
		updateDisplay(e.target?.id);
	};

	useEffect(() => {
		const onKeyDownHandler = (e: KeyboardEvent) => {
			const data = state[kit].find((item) => item.key.toLowerCase() === e.key.toLowerCase());
			document.getElementById(data.id)?.click();
			updateDisplay(data?.id);
		};

		document.addEventListener("keydown", onKeyDownHandler);

		return () => {
			document.removeEventListener("keydown", onKeyDownHandler);
		};
	}, [kit]);

	return (
		<>
			{state &&
				state[kit].map((item) => (
					<button className="drum-pad" id={item.id} onClick={onClickHandler}>
						<audio id={item.key} src={item.src}></audio>
						{item.key}
					</button>
				))}
		</>
	);
};

export default DrumPad;
