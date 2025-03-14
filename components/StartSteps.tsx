import styles from "../styles";

interface StartStepsProps {
    number: number;
    text: string;
}

const StartSteps: React.FC<StartStepsProps> = ({ number, text }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div
            className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-gray-300 `}
        >
            <p className="font-bold text-[20px] text-gray-900">0{number}</p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-gray-700 leading-[32px]">
            {text}
        </p>
    </div>
);

export default StartSteps; 