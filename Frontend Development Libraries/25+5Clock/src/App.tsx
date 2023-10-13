import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Timer from "./components/Timer";

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
    session: 1,
    timer: {
        minutes: 1,
        seconds: 0,
    },
    inSession: true,
    isRunning: false,
};

function App() {
    const [state, setState] = useState<IState>(initialState);
    const intervalRef = useRef<undefined | number>(undefined);
    const audio = new Audio(
        "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
    );

    useEffect(() => {
        if (state.inSession) {
            return setState((prevState) => ({
                ...prevState,
                timer: { minutes: prevState.session, seconds: 0 },
            }));
        }
        setState((prevState) => ({ ...prevState, timer: { minutes: prevState.break, seconds: 0 } }));
    }, [state.break, state.session, state.inSession]);

    const handleTimer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (state.isRunning) return;
        switch (e?.target?.id) {
            case "break-decrement":
                return setState((prevState) => ({
                    ...prevState,
                    break: prevState.break > 0 ? prevState.break - 1 : 0,
                }));
            case "break-increment":
                return setState((prevState) => ({ ...prevState, break: prevState.break + 1 }));
            case "session-decrement":
                return setState((prevState) => ({
                    ...prevState,
                    session: prevState.session > 0 ? prevState.session - 1 : 0,
                }));
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
            intervalRef.current = setInterval(() => {
                setState((prevState) => {
                    const { minutes, seconds } = prevState.timer;
                    if (minutes == 0 && seconds == 0) {
                        audio.play();

                        return {
                            ...prevState,
                            isRunning: false,
                            inSession: !prevState.inSession,
                        };
                    } else {
                        if (seconds == 0) {
                            return { ...prevState, isRunning: true, timer: { minutes: minutes - 1, seconds: 59 } };
                        } else {
                            return { ...prevState, isRunning: true, timer: { minutes, seconds: seconds - 1 } };
                        }
                    }
                });
            }, 1000);
        } else {
            setState((prev) => ({ ...prev, isRunning: false }));
            stopCountDown();
        }
    };

    const switchSession = () => setState((prevState) => ({ ...prevState, inSession: !prevState.inSession }));

    return (
        <div>
            <h1>25 + 5 Clock</h1>
            <Controller label='break' handleTimer={handleTimer} value={state.break} />
            <Controller label='session' handleTimer={handleTimer} value={state.session} />
            <Timer
                inSession={state.inSession}
                timer={state.timer}
                handleStartStop={handleStartStop}
                resetHandler={resetHandler}
                switchSession={switchSession}
            />
        </div>
    );
}

export default App;
