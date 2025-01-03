function Bio({next, isActive, value, change, prev}) {

    return (
      <>
        {isActive && (
              <section>
                  <h1>Bio</h1>
                  <div className="questions">
                      <label htmlFor="bio">Bio</label>
                      <textarea value={value}  onChange={change} name="bio" id="bio"></textarea>
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
  
  export default Bio
  