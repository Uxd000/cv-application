import { useState } from "react";

export default function Experience({ addExperience, experience }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    responsibilities: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit() {
    if (!form.company || !form.role) return;

    addExperience(form);

    setForm({
      company: "",
      role: "",
      responsibilities: "",
    });
  }

  return (
    <div className="card">
      <h2>Experience</h2>

      <div className="form-body">
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
        />

        <textarea
          name="responsibilities"
          placeholder="Responsibilities"
          value={form.responsibilities}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Add Experience</button>
      </div>

      <div className="list">
        <h3>Added Experiences</h3>

        {experience.length === 0 ? (
          <p>No experience added</p>
        ) : (
          experience.map((exp, index) => (
            <div key={index} className="list-item">
              <strong>{exp.company}</strong>
              <p>{exp.role}</p>
              <p>{exp.responsibilities}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}