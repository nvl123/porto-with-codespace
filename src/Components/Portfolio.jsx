/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/edited.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Sentinel - android app for guard you from negative habit",
    description:
      "This is an android app that I created to help people break their negative habits. It uses a simple interface and provides daily reminders to help users stay on track.",
    url: "https://github.com/Nvl123/Sentinel",
  },
  {
    title: "deep learning with python - Indonesia translation",
    description:
      "this is a translation of the popular deep learning with python book by Francois Chollet. I translated it to Indonesian to make it more accessible to people in Indonesia who are interested in deep learning.",
    url: "https://nvl123.github.io/Deep-Learning-dengan-Python/",
  },
  {
    title: "anime recommendation system",
    description:
      "This is a recommendation system that I created to recommend anime to users based on their preferences. It uses a simple interface and provides personalized recommendations based on user input.",
    url: "https://github.com/Nvl123/Sistem-Rekomendasi-Anime-berbasis-content-based-dan-colaborative-filtering",
  },
  {
    title: "IoT Smartlock",
    description:
      "This is a smart lock that I created using IoT technology. It allows users to control their locks remotely and provides enhanced security features.",
    url: "https://github.com/Nvl123/smartlock",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "50%", alignSelf: "center", overflow: "hidden" }}>
          <img
            src={image}
            style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: "12px", marginLeft: "-40px", animation: "slideInLeft 1s ease-out" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
