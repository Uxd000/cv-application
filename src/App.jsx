import { useState } from "react";
import Preview from "./components/preview";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {

  const [generalInfo,setGeneralInfo]=useState({
    name:"",
    email:"",
    phone:"",
  });

  const [education,setEducation]=useState({
    schName:"",
    degree:"",
    year:"",
  });

const [experience, setExperience] = useState([]);

  return (
    <div>
      <h1>CV Application</h1>
      <GeneralInfo 
        data={generalInfo}
        setData={setGeneralInfo}
      />

      <Education 
        data={education}
        setData={setEducation}
      />

      <Experience 
        data={experience}
        setData={setExperience}
      />

      <Preview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />

    </div>
  );
}

export default App;