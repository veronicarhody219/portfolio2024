import React from "react";

export default function About() {
  return (
    <div className="about">
      <h2>About me</h2>
      <p className="about-info">Hello, my name is Veronica</p>
      <p className="about-info">
        As a fledgling React developer, I'm just dipping my toes into the vast
        ocean of possibilities that this dynamic library offers. With every line
        of code, I'm learning to craft interactive and engaging user interfaces,
        fueled by the power of components and state management. The journey
        ahead seems daunting yet thrilling, as I navigate through the
        complexities of JSX syntax, component lifecycles, and the Redux
        ecosystem. Despite the occasional struggle, each 'aha' moment propels me
        forward, fueling my passion to master React and build remarkable web
        experiences.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_1280.jpg"
        alt="avatar"
        className="about-image"
      />
    </div>
  );
}
