import exercise from "./images/icon-exercise.svg";
import play from "./images/icon-play.svg";
import selfCare from "./images/icon-self-care.svg";
import social from "./images/icon-social.svg";
import study from "./images/icon-study.svg";
import work from "./images/icon-work.svg";

const svgMap = {
  Exercise: exercise,
  Play: play,
  "Self Care": selfCare,
  Social: social,
  Study: study,
  Work: work,
};

export default function GridItem(props) {
  const backgroundStyle = {
    background: `url(${svgMap[props.title]})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundColor: props.bgColor,
  };

  return (
    <section className="grid-item">
      <div className="background" style={backgroundStyle}></div>
      <div className="data">
        <div className="title">
          <h3>{props.title}</h3>
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <h4>{props.current}hrs</h4>
        <p>Last Week - {props.prev}hrs</p>
      </div>
    </section>
  );
}
