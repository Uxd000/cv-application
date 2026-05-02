import "../styles/Preview.css";

export default function Preview({ generalInfo, education, experience }) {
  return (
    <div className="preview-wrapper">
      <div className="preview-document">
        <header className="preview-header">
          <h1 className="preview-name">{generalInfo.name || "Your Name"}</h1>
          <div className="preview-contact">
            {generalInfo.email && <span>{generalInfo.email}</span>}
            {generalInfo.email && generalInfo.phone && (
              <span className="preview-divider" />
            )}
            {generalInfo.phone && <span>{generalInfo.phone}</span>}
          </div>
        </header>

        <section className="preview-section">
          <h3 className="preview-section-title">Education</h3>
          <div className="preview-entry">
            <div className="preview-entry-main">
              <span className="preview-entry-primary">
                {education.schName || "--"}
              </span>
              <span className="preview-entry-secondary">
                {education.degree || "--"}
              </span>
            </div>
            <span className="preview-entry-date">
              {education.year || "--"}
            </span>
          </div>
        </section>

        <section className="preview-section">
          <h3 className="preview-section-title">Experience</h3>
          <div className="preview-entry">
            <div className="preview-entry-main">
              <span className="preview-entry-primary">
                {experience.company || "--"}
              </span>
              <span className="preview-entry-secondary">
                {experience.role || "--"}
              </span>
            </div>
          </div>
          {experience.responsibilities && (
            <p className="preview-responsibilities">
              {experience.responsibilities}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}