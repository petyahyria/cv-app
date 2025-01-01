
function GeneralInfo({next, prev, isActive}) {

  return (
    <>
      {isActive && (
            <section>
                <h1>General info</h1>
                    <div>
                        <label htmlFor="firstname">Firstname</label>
                        <input type="text" name="firstname" id="firstname" />
                        <label htmlFor="lastname">Lastname</label>
                        <input type="text" name="lastname" id="lastname" />
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                        <button className="btn" onClick={prev}>Prev</button>
                        <button className="btn" onClick={next}>Next</button>
                    </div>
            </section>
        )}
    </>
  )
}

export default GeneralInfo
