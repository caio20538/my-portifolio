import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import { About } from "./Sections/About/About"
import { Hero } from "./Sections/Hero/Hero"
import { Projects } from "./Sections/Projects/Projects"


export const Home:React.FC = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

