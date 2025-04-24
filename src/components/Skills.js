import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2>🛠 Skills</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Kotlin</li>
              <li>Xcode</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Swift</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>Vue.js</li>
              <li>php</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Version Control</h3>
            <ul>
              <li>Git</li>
              <li>GitLab</li>
              <li>GitHub</li>
              <li>GitHub Actions</li>  
              <li>Visual Studio</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases</h3>
            <ul>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Scripting</h3>
            <ul>
              <li>Bash</li>
              <li>PowerShell</li>
            </ul>
          </div>
          <div className='skill-category'>
            <h3>Operating Systems & Environments</h3>
            <ul>
              <li>WSL</li>
              <li>Ubuntu</li>
              <li>Lubuntu</li>
              <li>Kali-linux</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & CI/CD</h3>
            <ul>
            <li>CI/CD Pipeline</li>
      <li>Kubernetes</li>
      <li>Docker</li>
      <li>Jenkins</li>
      <li>Helm</li>
      <li>npx</li>
       <li>Ansible</li>
            </ul>
          </div>
          <div className="skill-category">
    <h3>Monitoring & Logging</h3>
    <ul>
      <li>Prometheus</li>
      <li>Grafana</li>
      <li>Elastic Stack (ELK)</li>
    </ul>
  </div>
  <div className="skill-category">
    <h3>ChatOps</h3>
    <ul>
      <li>Slack</li>
      <li>Slack API</li>
    </ul>
  </div>
  <div className="skill-category">
    <h3>Infrastructure as Code (IaC)</h3>
    <ul>
      <li>Helm Charts</li>
      <li>kubectl</li>
      <li>Terraform</li>
    </ul>
  </div>
  <div className="skill-category">
    <h3>Security</h3>
    <ul>
      <li>DevSecOps Practices</li>
      <li>Jenkins Security Plugins</li>
      <li>AWS IAM</li>
    </ul>
  </div>
          <div className="skill-category">
            <h3>Cloud Platforms</h3>
            <ul>
              <li>Azure</li>
              <li>AWS</li>
              <li>AWS Elastic Beanstalk</li>
              <li>AWS Lambda</li>
              <li>Google Cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
