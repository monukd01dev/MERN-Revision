import React from 'react';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-card">
                
                {/* Left: Huge Typography & Bio */}
                <div className="about-content">
                    <h1 className="hero-title">Hi, I'm Monu.</h1>
                    <h3 className="hero-subtitle">Self-Taught Full-Stack Engineer</h3>
                    
                    <p className="bio-text">
                        I build scalable web applications, microservices, and robust backend systems. For me, real knowledge doesn't come from classrooms—it comes from hitting the keyboard, breaking things, and building them back up from scratch.
                    </p>
                    
                    <div className="skills-grid">
                        <div className="skill-item">
                            <span className="skill-dot"></span>
                            <p><strong>Stack:</strong> MERN, Java, MySQL</p>
                        </div>
                        <div className="skill-item">
                            <span className="skill-dot"></span>
                            <p><strong>System:</strong> Linux fanatic & CLI lover</p>
                        </div>
                        <div className="skill-item">
                            <span className="skill-dot"></span>
                            <p><strong>Hardware:</strong> DIY Electronics tinkerer</p>
                        </div>
                        <div className="skill-item">
                            <span className="skill-dot"></span>
                            <p><strong>Life:</strong> 6-day gym splits & Heavy lifting</p>
                        </div>
                    </div>

                    <a 
                        href="https://github.com/monukd01dev" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="pro-btn"
                    >
                        Explore My Work
                    </a>
                </div>

                {/* Right: Clean Image */}
                <div className="about-image-container">
                    <div className="image-backdrop">
                        <img 
                            src="https://github.com/monukd01dev.png" 
                            alt="Monu" 
                            className="profile-img" 
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;