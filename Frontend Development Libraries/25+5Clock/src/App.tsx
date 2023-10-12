import { useEffect, useRef, useState } from "react";
import "./App.css";

interface IState {
	break: number;
	session: number;
	timer: {
		minutes: number;
		seconds: number;
	};
	inSession: boolean;
	isRunning: boolean;
}

const initialState: IState = {
	break: 5,
	session: 25,
	timer: {
		minutes: 25,
		seconds: 0,
	},
	inSession: true,
	isRunning: false,
};

function App() {
	const [state, setState] = useState<IState>(initialState);
	const intervalRef = useRef<undefined | number>(undefined);

	useEffect(() => {
		if (state.inSession) {
			return setState((prevState) => ({
				...prevState,
				timer: { minutes: prevState.session, seconds: 0 },
			}));
		}
		setState((prevState) => ({ ...prevState, timer: { minutes: prevState.break, seconds: 0 } }));
	}, [state.break, state.session, state.inSession]);

	useEffect(() => {
		if (state.timer.minutes == 0 && state.timer.seconds == 0) {
			setTimeout(() => {
				setState((prevState) => ({
					...prevState,
					// isRunning: false,
					inSession: !prevState.inSession,
				}));
				handleStartStop();
			}, 1000);
		}
	}, [state.timer]);

	const handleTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (state.isRunning) return;
		switch (e.target?.id) {
			case "break-decrement":
				return setState((prevState) => ({ ...prevState, break: prevState.break - 1 }));
			case "break-increment":
				return setState((prevState) => ({ ...prevState, break: prevState.break + 1 }));
			case "session-decrement":
				return setState((prevState) => ({ ...prevState, session: prevState.session - 1 }));
			case "session-increment":
				return setState((prevState) => ({ ...prevState, session: prevState.session + 1 }));
		}
	};

	const resetHandler = () => {
		setState(initialState);
		clearInterval(intervalRef.current);
		intervalRef.current = undefined;
	};

	const stopCountDown = () => {
		clearInterval(intervalRef.current);
	};

	const handleStartStop = () => {
		if (!state.isRunning) {
			setState((prev) => ({ ...prev, isRunning: true }));
			intervalRef.current = setInterval(() => {
				setState((prevState) => {
					const { minutes, seconds } = prevState.timer;
					if (minutes == 0 && seconds == 0) {
						// setTimeout(() => {
						return {
							...prevState,
							isRunning: false,
							inSession: !prevState.inSession,
						};
						// }, 1000);
					} else {
						if (seconds == 0) {
							return { ...prevState, timer: { minutes: minutes - 1, seconds: 59 } };
						} else {
							return { ...prevState, timer: { minutes, seconds: seconds - 1 } };
						}
					}
				});
			}, 10);
		} else {
			setState((prev) => ({ ...prev, isRunning: false }));
			stopCountDown();
		}
	};

	return (
		<div>
			<h1>25 + 5 Clock</h1>
			<p id="break-label">Break Length</p>
			<p id="break-length">{state.break}</p>
			<button id="break-decrement" onClick={handleTimer}>
				break decrement
			</button>
			<button id="break-increment" onClick={handleTimer}>
				break increment
			</button>
			<p id="session-label">Session Length</p>
			<p id="session-length">{state.session}</p>
			<button id="session-decrement" onClick={handleTimer}>
				session decrement
			</button>
			<button id="session-increment" onClick={handleTimer}>
				session increment
			</button>
			<p id="timer-label">{state.inSession ? "Session" : "Break"}</p>
			<p id="time-left">{`${state.timer.minutes} : ${state.timer.seconds}`}</p>
			<button id="start_stop" onClick={handleStartStop}>
				start stop
			</button>
			<button id="reset" onClick={resetHandler}>
				reset
			</button>
		</div>
	);
}

export default App;
