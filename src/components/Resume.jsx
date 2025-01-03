function Resume({ back, isActive, fullName, experience, education, generalInfo, bio, skills }) {
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
                                {skills.map((el)=>(
                                    <li key={el.id}>{el.value}</li>
                                )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        <h1 className="fullName">{fullName.slice(0, 2)}<span className="under">{fullName.slice(2, 6)}</span>{fullName.slice(6)}</h1>
                        <h2 className="path">{generalInfo.path}</h2>
                        <div className="bio"><h2>Bio</h2><p>{bio}</p></div>
                        <div className="experience">
                            <h2 className="exp-t">Experience</h2>
                            <h2>Project: {experience.title}</h2>
                            <h3>Company: {experience.company}</h3>
                            <h3>Stack: {experience.stack}</h3>
                            <p>time: {`${experience.start} - ${experience.end}`}</p>
                        </div>
                        <div className="education">
                            <h2 className="exp-t">Education</h2>
                            <h2>School name: {education.schoolName}</h2>
                            <h3>Course: {education.course}</h3>
                            <p>time: {`${education.start} - ${experience.end}`}</p>
                        </div>
                    </div>
                </div>
                <button className="btn back-btn" onClick={back}>Back</button>
            </section>
        )}
      </>
    )
  }

  export default Resume