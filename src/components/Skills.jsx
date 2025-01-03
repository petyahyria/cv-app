
function Skills({prev, next, isActive, value, change}) {
    
    return (
      <>
        {isActive && (
              <section>
                  <h1>Skills</h1>  
                  <div className="skills questions">
                    <label htmlFor={`skills`}>Skills</label>
                    <input value={value} onChange={change} type="text" name={`skills`} id={`skills`} />
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
  
  export default Skills