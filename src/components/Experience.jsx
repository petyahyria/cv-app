
function Experience({next, prev, isActive}) {

    return (
      <>
        {isActive && (
        <section>
              <h1>Experience</h1>
                  <div>
                      <label htmlFor="firstname"></label>
                      <input type="text" name="firstname" id="firstname" />
                      <label htmlFor="lastname"></label>
                      <input type="text" name="lastname" id="lastname" />
                      <label htmlFor="phone"></label>
                      <input type="tel" name="phone" id="phone" />
                      <label htmlFor="email"></label>
                      <input type="email" name="email" id="email" />
                      <button className="btn" onClick={prev}>Prev</button>
                      <button className="btn" onClick={next}>Next</button>
                      <button className="btn" onClick={next}>Submit</button>
                  </div>
        </section>
        )}
      </>
    )
  }
  
  export default Experience
  