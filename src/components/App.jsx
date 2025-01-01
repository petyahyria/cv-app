import { useState } from 'react'
import '../styles/App.css'
import GeneralInfo from './generalInfo'
import Education from './Education'
import Experience from './Experience'

function App() {
  const [activeIndex, setActiveIndex]=useState(0);

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
      <GeneralInfo next={clickNext} prev={clickPrev} isActive={activeIndex===0} />
      <Education next={clickNext} prev={clickPrev} isActive={activeIndex===1} />
      <Experience next={clickNext} prev={clickPrev} isActive={activeIndex===2} />
    </div>
  )
}

export default App
