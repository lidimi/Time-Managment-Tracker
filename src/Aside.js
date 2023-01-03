export default function Aside() {
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
        <h2>Daily</h2>
        <h2>Weekly</h2>
        <h2>Monthly</h2>
      </section>
    </aside>
  );
}
