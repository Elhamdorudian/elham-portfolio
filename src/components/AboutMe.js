import "../assets/styles/AboutMe.css";
import myImg from "../assets/images/myPic.jpeg";
import { Animated } from 'react-web-animation';
import { faBridgeLock } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  const skills = [
    "Javascript",
    "React",
    "Typescript",
    "node.js",
    "Jest",
    "React Testing Library",
  ];

// const ScrollTrackingTimeline = new ScrollTrackingTimeline({
//   source: document.scrollingElement,
//   orientation: faBridgeLock,
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)]

// });

  const getKeyFrames = () => {
    return [
        { transform: 'scale(0.8)',    opacity: 0.5,     offset: 0 },
        { transform: 'scale(1)',   opacity: 1,   offset: 0.3 },
        // { transform: 'scale(.667)', opacity: 0.667, offset: 0.7875 },
        // { transform: 'scale(.6)',   opacity: 0.6,   offset: 1 }
    ];
};

const getTiming = ( duration ) => {
    return {
        duration,
        easing: 'ease-in-out',
        delay: 0,
        iterations: 1,
        direction: 'alternate',
        fill: 'forwards'
    };
};

  return (
    <div className="main-content-section" id="about">
      <h3 className="section-h section-h-gen">
        <span className="section-no">01. </span>About Me
      </h3>
      <div className="section-content">
        <div>
          <p className="main-content-desc">
            Hello! My name is Elham and I enjoy creating things that live on the
            internet. I started my career as a marketing specialist at a
            telecommunication company and got interested in programming and
            specially web design on 2020. Here are a few technologies I have
            been working with recently:
          </p>

          <ul className="about-skills main-content-desc">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <Animated className="about-img-wrapper" keyframes={getKeyFrames()} timing={getTiming(3000)}>
          <img className="about-img" src={myImg} alt="myImg" />
        </Animated>
      </div>
    </div>
  );
};

export default AboutMe;
