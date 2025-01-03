import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Resume from './Resume'

function App() {
  const [activeIndex, setActiveIndex]=useState(0);
  const [experience, setExperience] = useState(
    {
        "title": "",
        "company": "",
        "start": "",
        "end": ""
    });
  const [education, setEducation] = useState(
    {
        "schoolName": "",
        "course": "",
        "start": "",
        "end": ""
    });
  const [generalInfo, setGeneralInfo] = useState(
    {
        "firstname": "",
        "lastname": "",
        "phone": "",
        "email": ""
    });
  const [skills, setSkills] = useState("");
  const skillsArray = skills.split(" ");   

  console.log(skillsArray);

  function changeHandler(e){
    setSkills(e.target.value);
  }

  function clickNext() {
    if(activeIndex < 3){
      setActiveIndex(activeIndex+1)
    }
  }
  function clickPrev() {
    if(activeIndex > 0){
      setActiveIndex(activeIndex-1)
    }
  }

  const fullName = `${generalInfo.firstname} ${generalInfo.lastname}` 


  return (
    <div className="app">
      <GeneralInfo next={clickNext} isActive={activeIndex===0} generalInfo={generalInfo} change={(x)=>setGeneralInfo(x)} />
      <Education next={clickNext} prev={clickPrev} isActive={activeIndex===1} education={education} change={(x)=>setEducation(x)}/>
      <Skills isActive={activeIndex===2} next={clickNext} prev={clickPrev} value={skills} change={changeHandler}  />
      <Experience submit={clickNext} prev={clickPrev} isActive={activeIndex===3} experience={experience} change={(x)=>setExperience(x)}/>
      <Resume fullName={fullName} back={clickPrev} experience={experience} education={education} generalInfo={generalInfo} isActive={activeIndex===4} skills={skillsArray}  /> 
    </div>
  )
}

export default App
