import Header from "./header"
import About from "./about"
import Summary from "./summary"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contect"


function App() {
 
  return (
    <>
      <Header/>
      <section id="about"><About/></section>
      <section id="summary"><Summary/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>
    </>
  )
}

export default App
