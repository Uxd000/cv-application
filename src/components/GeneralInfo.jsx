import { useState } from "react";
import "../styles/app.css";

export default function GeneralInfo({ data, setData }) {
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
        <h2 className="card-title">General Information</h2>
        {!isEditing && (
          <button className="btn btn-ghost" onClick={handleEdit}>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="form-body">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              className="form-input"
              name="name"
              placeholder="e.g. Jane Smith"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              name="email"
              placeholder="e.g. jane@email.com"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input
              className="form-input"
              name="phone"
              placeholder="e.g. +1 555 000 0000"
              value={data.phone}
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
            <span className="display-label">Name</span>
            <span className="display-value">{data.name}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Email</span>
            <span className="display-value">{data.email}</span>
          </div>
          <div className="display-row">
            <span className="display-label">Phone</span>
            <span className="display-value">{data.phone}</span>
          </div>
        </div>
      )}
    </div>
  );
}