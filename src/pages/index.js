import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "auto",
  textAlign: "center",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  fontSize: "2.5rem",
  color: "#333",
};

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.2rem",
  lineHeight: "1.6",
  maxWidth: "800px",
  margin: "0 auto",
  color: "#555",
};

const pictureStyles = {
  width: "50%",
  display: "block",
  margin: "20px auto",
  borderRadius: "50%",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
};
const footerStyles = {
  marginTop: "32px",
  padding: "20px",
  backgroundColor: "#fff",
  color: "#333",
  bottom: 0,
  width: "auto",
  textAlign: "center",
};

const HomePage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Welcome to Memory Lane</h1>
      <img src="https://api.reliasoftware.com/uploads/web_development_is_important_176fa0618e.jpg" style={pictureStyles} />
      <div style={paragraphStyles}>
        <h3>The Future of Web Development - Jul 9</h3>
        <p>
            As a web development student, my journey has been filled with challenges, but I am determined to graduate and succeed in this 
            field. Despite facing setbacks and technical hurdles along the way, each obstacle has strengthened my resolve and deepened my 
            understanding of web technologies. I've learned to persevere through coding bugs, complex projects, and demanding deadlines, 
            knowing that overcoming these challenges will prepare me for a rewarding career in web development. With dedication and a 
            passion for learning, I am committed to achieving my goal of graduating and contributing to the future of digital innovation.
          </p>
          <br/>
          <img src="https://blog.postman.com/wp-content/uploads/2023/03/230404-Blog-Diagram.jpg" style={pictureStyles} />
        <h3>My Experience Building an API - Jul 14</h3>
          <p>
            Building an API from scratch was a challenging yet rewarding experience. It taught me how to connect the dots between front-end 
            and back-end development. I gained hands-on experience in handling databases, implementing CRUD operations, and managing data flow.
            This journey also reinforced the importance of clear documentation and robust error handling, which are crucial for any developer 
            working with APIs. <br/>
            As I move forward in my studies, I feel more confident tackling complex projects and contributing to real-world applications.
            In conclusion, building an API has been a foundational experience in my web development education. It has provided me with skills and knowledge 
            that will serve me well in my future career. If you’re a fellow student or just starting your coding journey, I encourage you to dive into API 
            development—it's an invaluable skill that will enhance your understanding of web applications.
          </p>
          <br/>
          <img src="https://www.winklix.com/blog/wp-content/uploads/2019/02/all-about-react-native-apps-776x415.png" style={pictureStyles} />
        <h3>Exploring React Native - Jul 19</h3>
          <p>
          The React Native framework seamlessly extends my JavaScript skills into the realm of mobile app development, a familiar environment with powerful 
          capabilities. What strikes me most is its component-based architecture, which mirrors React.js and simplifies the creation of modular, reusable code. 
          The supportive community and comprehensive documentation have been incredibly helpful in providing guidance and solutions whenever I encounter challenges. 
          React Native is not just a tool; it's a pathway to mastering cross-platform mobile development, empowering me to build innovative applications efficiently 
          and effectively.
          </p>
          <br/>
          <img src="https://www.logicmonitor.com/wp-content/uploads/2021/09/JSONWebTokensblog.png" style={pictureStyles} />
          <h3>An Overview of JSON Web Tokens (JWT) - Jul 26</h3>
          <p>
          JSON Web Tokens (JWT) offer a streamlined and secure method for transmitting information between different parts of a web application. A JWT is divided into 
          three segments: the header, which specifies the token type and the signing algorithm; the payload, which contains the claims or data about the user; and the 
          signature, which ensures the integrity and authenticity of the token. This compact structure allows JWTs to be efficiently passed through URLs or HTTP headers, 
          making them a valuable tool in modern web development.

          In practice, JWTs are primarily used for authentication and authorization. When a user logs in, the server generates a JWT that includes the user's information, 
          which is then used in subsequent requests to verify the user's identity. JWTs can also include authorization claims to manage user permissions. Despite their 
          advantages—such as being self-contained and reducing server-side storage requirements—JWTs require careful attention to details like token expiration and secret 
          management to ensure robust security.
          </p>
      </div>
      <footer style={footerStyles}>
        <p>© 2024 Developing Web Apps. Sonoely Rivera.</p>
      </footer>
    </main>
  );
};

export default HomePage;

export const Head = () => <title>Welcome</title>;
