import "../styles/Preview.css";

export default function Preview({ generalInfo, education, experience }) {
  return (
    <div className="preview-wrapper">
      <div className="preview-document">

        <h1>{generalInfo.name || "Your Name"}</h1>
        <p>
          {generalInfo.email} {generalInfo.phone && " | "} {generalInfo.phone}
        </p>

        <hr />

        <h3>Education</h3>
        <p>{education.schName}</p>
        <p>{education.degree}</p>
        <p>{education.year}</p>

        <h3>Experience</h3>

        {experience.length === 0 ? (
          <p>No experience added</p>
        ) : (
          experience.map((exp, index) => (
            <div key={index}>
              <p><strong>{exp.company}</strong></p>
              <p>{exp.role}</p>
              <p>{exp.responsibilities}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}