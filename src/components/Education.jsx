function Education({next, prev, isActive, education, change}) {

    return (
      <>
        {isActive && 
            (
            <section>
                <h1>Education</h1>
                <div className="education questions">
                    <label htmlFor="school-name">School name</label>
                    <input value={education.schoolName} onChange={(e)=>change(()=>{return {...education, schoolName:e.target.value} })} type="text" name="school-name" id="school-name" />
                    <label htmlFor="course">Course</label>
                    <input value={education.course} onChange={(e)=>change(()=>{return {...education, course:e.target.value} })} type="text" name="course" id="course" />
                    <label htmlFor="enter">Enter</label>
                    <input value={education.start} onChange={(e)=>change(()=>{return {...education, start:e.target.value} })} type="date" name="enter" id="enter" />
                    <label htmlFor="graduate">Graduate</label>
                    <input value={education.end} onChange={(e)=>change(()=>{return {...education, end:e.target.value} })}  type="date" name="graduate" id="graduate" />
                </div>
                <div className="btn-div">
                    <button className="btn" onClick={prev}>Prev</button>
                    <button className="btn" onClick={next}>Next</button>
                </div>
            </section>
        )}
      </>
    )
  }
  
  export default Education
  