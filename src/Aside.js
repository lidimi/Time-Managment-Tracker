export default function Aside(props) {
  const avatar = require("./images/image-jeremy.png");

  return (
    <aside>
      <div className="hero">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <p>Report For</p>
        <h1>Jeremy Robson</h1>
      </div>
      <section className="timespan">
        <h2 onClick={props.toggleTimeSpawn}>Daily</h2>
        <h2 onClick={props.toggleTimeSpawn}>Weekly</h2>
        <h2 onClick={props.toggleTimeSpawn}>Monthly</h2>
      </section>
    </aside>
  );
}
