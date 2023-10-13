import { PlusIcon, MinusIcon } from "../assets/Icons";

interface IController {
    value: number;
    label: string;
    handleTimer: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Controller = ({ label, handleTimer, value }: IController) => {
    return (
        <div>
            <p id={`${label}-label`}>{label == "session" ? "Session" : "Break"} </p>
            <div className='controller__time'>
                <button id={`${label}-decrement`} onClick={handleTimer}>
                    <MinusIcon />
                </button>
                <p id={`${label}-length`}>{value}</p>
                <button id={`${label}-increment`} onClick={handleTimer}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    );
};

export default Controller;
