

function Experience({prev, isActive, submit, experience, change}) {
    return (
      <>
        {isActive && (
        <section>
            <h1>Experience</h1>
            <div className="questions">
                <label htmlFor="title">Job title or project</label>
                <input value={experience.title} onChange={(e)=>change(()=>{return {...experience, title:e.target.value} })} type="text" name="title" id="title" />
                <label htmlFor="company">Company</label>
                <input value={experience.company} onChange={(e)=>change(()=>{return {...experience, company:e.target.value} })} type="text" name="company" id="company" />
                <label htmlFor="stack">Stack</label>
                <input value={experience.stack} onChange={(e)=>change(()=>{return {...experience, stack:e.target.value} })}  type="text" name="stack" id="stack" />
                <label htmlFor="start">Start</label>
                <input value={experience.start} onChange={(e)=>change(()=>{return {...experience, start:e.target.value} })} type="date" name="start" id="start" />
                <label htmlFor="end">End</label>
                <input value={experience.end} onChange={(e)=>change(()=>{return {...experience, end:e.target.value} })} type="date" name="end" id="end" />
            </div>
            <div className="btn-div">
                      <button className="btn" onClick={prev}>Prev</button>
                      <button className="btn" onClick={submit}>Submit</button>
            </div>
                
        </section>
        )}
      </>
    )
  }

 
  
  export default Experience
  