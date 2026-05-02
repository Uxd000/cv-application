import { useState } from "react";

export default function Experience({ data, setData }) {
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
        <h2 className="card-title">Experience</h2>
        {!isEditing && (
          <button className="btn btn-ghost" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="form-body">
          <div className="form-group">
            <label className="form-label">Company</label>
            <input
              className="form-input"
              name="company"
              placeholder="e.g. Acme Corp"
              value={data.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Role</label>
            <input
              className="form-input"
              name="role"
              placeholder="e.g. Frontend Developer"
              value={data.role}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Responsibilities</label>
            <textarea
              className="form-textarea"
              name="responsibilities"
              placeholder="Describe your key responsibilities..."
              value={data.responsibilities}
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
            <span className="display-label">Company</span>
            <span className="display-value">{data.company}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Role</span>
            <span className="display-value">{data.role}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Responsibilities</span>
            <span className="display-value display-value--block">
              {data.responsibilities}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}