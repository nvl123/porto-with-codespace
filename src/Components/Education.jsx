/**
 * Education component
 *
 * Highlights your educational background, degrees, and certifications.
 */

import React from "react";
import novilImage from "../images/novil pict.jpg";

/**
 * Education list
 *
 * An array of objects that will be used to display your education
 * Update to reflect your educational background.
 */
const educationList = [
  {
    school: "State University of Surabaya",
    degree: "Bachelor's in Informatics Engineering",
    year: "2020 - Present",
    description:
      "Currently pursuing a degree in Informatics Engineering with focus on AI and software development.",
  },
  {
    school: "Bangkit Academy",
    degree: "Android Development Path Certification",
    year: "2023",
    description:
      "Completed comprehensive Android development training program focusing on mobile application development.",
  },
  {
    school: "Coding Camp by DBS Foundation",
    degree: "Machine Learning Engineer Certification",
    year: "2023",
    description:
      "Completed intensive machine learning program covering deep learning, data science, and AI applications.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem", gap: "3rem", alignItems: "center" }}>
        {/* Left side - Education content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            paddingTop: "1rem",
            position: "relative",
          }}
        >
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "30px",
              top: "0",
              bottom: "0",
              width: "3px",
              background: "linear-gradient(to bottom, #823232, #D2F1E4)",
            }}
          />

          {educationList.map((edu, index) => (
            <div
              className="education-card"
              key={edu.school}
              style={{
                marginBottom: "40px",
                marginLeft: "100px",
                position: "relative",
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-70px",
                  top: "15px",
                  width: "18px",
                  height: "18px",
                  background: "#823232",
                  borderRadius: "50%",
                  border: "4px solid #ffffff",
                  boxShadow: "0 0 0 4px #823232",
                }}
              />

              <div
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  borderLeft: "4px solid #823232",
                  borderRadius: "8px",
                  padding: "24px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(130, 50, 50, 0.15)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                  <h3 style={{ color: "#823232", margin: "0", flex: "1" }}>{edu.degree}</h3>
                  <span
                    style={{
                      background: "#823232",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                      marginLeft: "12px",
                    }}
                  >
                    {edu.year}
                  </span>
                </div>
                <p style={{ fontWeight: "600", marginBottom: "12px", color: "#4e567e", margin: "0 0 12px 0" }}>
                  {edu.school}
                </p>
                <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#555", margin: "0" }}>
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Image */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src={novilImage}
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(130, 50, 50, 0.2)",
              animation: "slideInRight 0.6s ease-out",
              objectFit: "cover",
              aspectRatio: "3/4",
            }}
            alt="Novil"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
