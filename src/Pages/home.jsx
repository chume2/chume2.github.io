import React from 'react';
import '../Styles/home.css'; // Assuming you will style this component with a separate CSS file
import { FiExternalLink } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="home-header">
        <h1 className="home-title">Charlie Hume</h1>
        <p className="home-subtitle">Software Engineer</p>
      </header>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          My name is Charlie Hume. I am a passionate software engineer with a rare talent for solving problems. I am set to graduate from Villanova 
          University with bachelor's degrees in both Computer Science and Mathematics. With experience in modern web technologies and a commitment to continuous learning, I am a valuable member of 
          every team I'm on. What drives me is my desire to bring impactful solutions to as many people as I can.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>My Work</h2>
        <div className="projects-list">
          {/* Project 1 */}
          <div className="project-card">
            <h3>
                <img src="/SCLogo.png" style={{ width: '7%', height: '7%', marginRight: '2%', verticalAlign: 'middle'}}></img>
                <span style={{ verticalAlign: 'middle' }}>Social Connect</span>
                <a href="https://danbfrost.com" target="_blank" rel="noopener noreferrer" className="external-link">
                    <FiExternalLink/>
                </a>
            </h3>
            <p>
                A year ago we noticed a problem that content creators were currently facing. With the emergence of short from content, creators were wasting 
                time having to post and view post performance from multiple applications. Our solution was the birth of Social Connect, a social media dashboard 
                that allows users to see all their content in one place. Social Connect leverages social media APIs to allow for seamless integration with 
                Instagram, TikTok, and YouTube. Our site was built using React, Spring Boot, and a MySQL database, and is hosted on AWS.
            </p>
            {/* <video width="640" height="360" controls className="demo-video"> */}
            <video width="90%" height="40%" controls className="demo-video">
                <source src="/SCdemo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <a href="https://github.com/CSC4700-Spring2024-Org/csc4700-team-project-socialconnect" target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Clutch Factor - A new way to measure how NFL quarterbacks perform under pressure</h3>
            <p>For my Mathematics Capstone Project, my classmate and I set out to design a new way to measure "clutch ability" in NFL quarterbacks. We defined clutch ability 
                as how much a quarterback increases or decreases his typical performance as the clock winds down and the game is on the line. In order to measure quarterback 
                performance in a modern and accurate way, we developed a quarterback performance metric called QPI (Quarterback Performance Index) to replace the outdated and 
                highly flawed Passer Rating metric. We accomplished this using multiple linear regression on a number of key variables, and using the pseudo-inverse (Moore-Penrose 
                inverse) to solve our matrix. Then, using our QPI metric, we were able to create our Clutch Factor formula, which compares quarterback performance in the fourth 
                quarter within one score to quarterback performance in the first three quarters. Our results were fascinating.</p>
            <img src='/QPI Visual.png' width="85%" height="60%" style={{ marginLeft: '7%', marginTop: '2%'}}></img>
            <img src='/CF 2023 QB Ranking.png' width="85%" height="60%" style={{ marginLeft: '7%', marginTop: '5%'}}></img>
            <a href="/ClutchFactor.pdf" target="_blank" rel="noopener noreferrer" className="project-link">
                View PDF
            </a>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <h3>
                <span style={{ verticalAlign: 'middle' }}>Unity Project: Villanova Survival</span>
            </h3>
            <p>
                I spearheaded a team of four developers to create a zombie FPS survival game set on my college campus in 
                an apocalyptic world using Unity. We used Google Earth tools paired with Blender to create the perfect 
                recreation of Villanova's campus. All of our code was written in C#.
            </p>
            <img src='/VillanovaMapZoomedOut.png' width="95%" height="60%" style={{ paddingLeft: '2%'}}>
            </img>
            {/* <video width="640" height="360" controls className="demo-video"> */}
            <video width="95%" height="60%" controls className="demo-video">
                <source src="/VillanovaSurvivalDemo.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
        <div className="contact-links">
          <a href="mailto:charliehume0806@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/charlie-hume-477317269/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} Charlie Hume. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
