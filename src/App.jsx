import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Preview from "./components/Preview";
import "./styles/app.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    schName: "",
    degree: "",
    year: "",
  });

  const [experience, setExperience] = useState([]);

  function addExperience(newExp) {
    setExperience([...experience, newExp]);
  }

  return (
    <div className="container">
      <div className="form-section">
        <h1>CV Application</h1>

        <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
        <Education data={education} setData={setEducation} />

        <Experience
          addExperience={addExperience}
          experience={experience}
        />
      </div>

      <div className="preview-section">
        <Preview
          generalInfo={generalInfo}
          education={education}
          experience={experience}
        />

        
      </div>
      
    </div>
  );
}

export default App;