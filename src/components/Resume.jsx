function Resume({ back, isActive, fullName, experience, education, generalInfo }) {
    return (
      <>
        {isActive && (
            <section>
                <div className="resume">
                    <div className="side">
                        <div className="contacts-div">
                            <h2>Contacts</h2>
                            <ul className="contacts">
                                <li>{generalInfo.phone}</li>
                                <li>{generalInfo.email}</li>
                            </ul>
                        </div>
                        <div className="skills-div">
                            <h2>Skills</h2>
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Js</li>
                                <li>React</li>
                                <li>Git</li>
                                <li>Webpack</li>
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="fullName">{fullName}</h1>
                        <div className="experience">
                            <h2>{experience.title}</h2>
                            <h3>{experience.company}</h3>
                            <p>{`${experience.start} - ${experience.end}`}</p>
                        </div>
                        <div className="education">{education.schoolName}</div>
                    </div>
                </div>
                <button className="btn back-btn" onClick={back}>Back</button>
            </section>
        )}
      </>
    )
  }

  export default Resume