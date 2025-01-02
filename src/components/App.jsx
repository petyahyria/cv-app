import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import Education from './Education'
import Experience from './Experience'

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

  function clickNext() {
    if(activeIndex < 2){
      setActiveIndex(activeIndex+1)
    }
  }
  function clickPrev() {
    if(activeIndex > 0){
      setActiveIndex(activeIndex-1)
    }
  }
  return (
    <div className="app">
      <GeneralInfo next={clickNext} prev={clickPrev} isActive={activeIndex===0} generalInfo={generalInfo} change={(x)=>setGeneralInfo(x)} />
      <Education next={clickNext} prev={clickPrev} isActive={activeIndex===1} education={education} change={(x)=>setEducation(x)}/>
      <Experience next={clickNext} prev={clickPrev} isActive={activeIndex===2} experience={experience} change={(x)=>setExperience(x)}/>
    </div>
  )
}

export default App
