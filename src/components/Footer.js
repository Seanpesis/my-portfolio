import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <span className="footer-text">
            © {currentYear} All rights reserved by Sean Pesis
          </span>
        </div>

        <ul className="footer-socials">
          <li>
            <a
              href="mailto: sean.pesis1@gmail.com"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M502.3 190.8c-6.6-2.9-15.1-2.3-20.8 2.4L264 331.4 30.4 193.1c-5.7-4.7-14.2-5.3-20.8-2.4-6.6 2.9-10.6 9.5-10.6 16.8v239.5c0 19.2 15.6 34.8 34.8 34.8h442.4c19.2 0 34.8-15.6 34.8-34.8V207.6c0-7.2-4-13.9-10.7-16.8zM264 320.5L496 191v-33c0-19.2-15.6-34.8-34.8-34.8H50.8C31.6 123.2 16 138.8 16 158v33l232 129.5 16 .8z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sean-pesis-28b3b0225/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zm-46.14-338.6C24.45 109.4 0 133.69 0 163.64c0 29.95 24.45 54.24 54.14 54.24 29.69 0 53.72-24.29 53.72-54.24 0-29.94-24.03-54.25-53.72-54.25zm359.12 338.6H311.2v-172.4c0-41.1-.82-93.88-57.17-93.88-57.23 0-65.97 44.68-65.97 90.86V448H95.1V148.9h89.3v40.82h1.29c12.42-23.51 42.68-48.33 87.79-48.33 93.94 0 111.24 61.85 111.24 142.3V448z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Seanpesis"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.205 11.387.6.113.82-.26.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754
                  -1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.833 2.807 1.304 
                  3.492.998.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 
                  1.236-3.22-.124-.303-.535-1.524.118-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 
                  3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 
                  3.297-1.23.655 1.652.244 2.873.12 3.176.77.84 1.235 1.91 
                  1.235 3.22 0 4.61-2.804 5.62-5.475 5.918.43.37.814 1.1.814 
                  2.22 0 1.606-.015 2.903-.015 3.297 0 .32.218.694.825.576C20.565 
                  21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
