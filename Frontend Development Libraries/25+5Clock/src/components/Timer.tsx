import { StopWatch, ResetIcon, ToggleOnIcon, ToggleOffIcon } from "../assets/Icons";

interface ITimer {
    inSession: boolean;
    timer: { minutes: number; seconds: number };
    handleStartStop: () => void;
    resetHandler: () => void;
    switchSession: () => void;
}

const Timer = ({ inSession, timer, handleStartStop, resetHandler, switchSession }: ITimer) => {
    return (
        <div className='timer'>
            <p id='timer-label'>{inSession ? "Session" : "Break"}</p>
            <p id='time-left'>{`${timer.minutes} : ${timer.seconds}`}</p>
            <div className='timer__buttons'>
                <button id='start_stop' onClick={handleStartStop}>
                    <StopWatch />
                </button>
                <button id='reset' onClick={resetHandler}>
                    <ResetIcon />
                </button>
                <button onClick={switchSession}>{inSession ? <ToggleOnIcon /> : <ToggleOffIcon />}</button>
            </div>
        </div>
    );
};

export default Timer;
