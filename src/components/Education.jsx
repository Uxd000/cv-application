import { useState } from "react";
import "../styles/app.css";

export default function Education({ data, setData }) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit() {
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Education</h2>
        {!isEditing && (
          <button className="btn btn-ghost" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="form-body">
          <div className="form-group">
            <label className="form-label">School Name</label>
            <input
              className="form-input"
              name="schName"
              placeholder="e.g. MIT"
              value={data.schname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Degree</label>
            <input
              className="form-input"
              name="degree"
              placeholder="e.g. B.Sc. Computer Science"
              value={data.degree}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Year</label>
            <input
              className="form-input"
              name="year"
              placeholder="e.g. 2021"
              value={data.year}
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="display-body">
          <div className="display-row">
            <span className="display-label">School</span>
            <span className="display-value">{data.schName}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Degree</span>
            <span className="display-value">{data.degree}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Year</span>
            <span className="display-value">{data.year}</span>
          </div>
        </div>
      )}
    </div>
  );
}