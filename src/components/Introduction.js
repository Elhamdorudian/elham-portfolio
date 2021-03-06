import "../assets/styles/Introduction.css";
const Introduction = () => {
  return (
    <div className="main-content-intro">
      <p className="main-content-p">Hi, my name is</p>
      <h1>Elham Doroodian</h1>
      <h2>I'm a web web developer and marketing analyst.</h2>
      <p className="main-content-desc">
        I'm a web developer with a passion to learn new tech and tools. I'm
        currently working as a Front-End Developer and Marketing-Analystat{" "}
        <a href="https://www.mci.ir/" rel="noreferrer" target="_blank">
          MCI
        </a>
        .
      </p>
      <button className="cv-btn">Check out my CV</button>
    </div>
  );
};

export default Introduction;
