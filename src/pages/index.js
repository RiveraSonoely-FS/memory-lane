import * as React from "react"
import robotPic from "../images/robot.jpg";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const pictureStyles = {
  size: "10px",
  display: "center"
}

const HomePage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Welcome to Memory Lane</h1>
      <p style={paragraphStyles}>
      <div>
      <img src={robotPic} style={pictureStyles} alt="Robot"/>
      </div>
      The Future of Web Development - Jul 9
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            "As a web development student, my journey has been filled with challenges, but I am determined to graduate and succeed in this field. Despite facing setbacks and technical hurdles along the way, each obstacle has strengthened my resolve and deepened my understanding of web technologies. I've learned to persevere through coding bugs, complex projects, and demanding deadlines, knowing that overcoming these challenges will prepare me for a rewarding career in web development. With dedication and a passion for learning, I am committed to achieving my goal of graduating and contributing to the future of digital innovation."
            <br />
          </>
        ) : null}
        <br />
      </p>
    </main>
  )
}

export default HomePage

export const Head = () => <title>Welcome</title>