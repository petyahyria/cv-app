function GeneralInfo({next, isActive, generalInfo, change}) {

  return (
    <>
      {isActive && (
            <section>
                <h1>General info</h1>
                <div className="questions">
                    <label htmlFor="firstname">Firstname</label>
                    <input value={generalInfo.firstname} onChange={(e)=>change(()=>{return {...generalInfo, firstname: e.target.value} })} type="text" name="firstname" id="firstname" />
                    <label htmlFor="lastname">Lastname</label>
                    <input value={generalInfo.lastname} onChange={(e)=>change(()=>{return {...generalInfo, lastname: e.target.value} })} type="text" name="lastname" id="lastname" />
                    <label htmlFor="phone">Phone</label>
                    <input value={generalInfo.phone} onChange={(e)=>change(()=>{return {...generalInfo, phone: e.target.value} })} type="tel" name="phone" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input value={generalInfo.email} onChange={(e)=>change(()=>{return {...generalInfo, email: e.target.value} })} type="email" name="email" id="email" />
                </div>
                <div className="btn-div">
                    <button className="btn" onClick={next}>Next</button>
                </div>
            </section>
        )}
    </>
  )
}

export default GeneralInfo
