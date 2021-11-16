import "tailwindcss/tailwind.css";
import Icon from "./Icon";
const Card = ({ card, tiempo }) => {
  const {
    color,
    title,
    icon,
    timeframes: { [tiempo]: time },
  } = card;
  return (
    <div className={`rounded-2xl h-36 relative ${color}`}>
      <Icon path={icon} />
      <div className="px-8 py-4 bg-neutral-dark_blue rounded-2xl h-24 absolute -bottom-0 w-full">
        <div className="flex self-center justify-between flex-col text-white">
          <div className="flex justify-between">
            <p>{title}</p>
            <div className="self-center">
              <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#BBC0FF"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-3xl font-light">{time.current}hrs</p>
            <div className="text-sm text-neutral-pale_blue self-center">
              <span>
                Last {time.frecuency} - {time.previous}hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.defaultProps = {
  color: "bg-white",
};
export default Card;
