import { TopBar } from './(top-bar)/TopBar'
import { Home } from './(home)/Home'
import { About } from './(about)/About'
import { Experience } from './(experience)/Experience'
import { Projects } from './(projects)/Projects'
import { Skills } from './(skills)/Skills'
import { Education } from './(education)/Education'
import { Contact } from './(contact)/Contact'

export default function App() {
    return (
        <>
            <TopBar />
            <Home />
            <About />
            <Skills />
            <Education />
            <Experience />
            <Projects />
            <Contact />
        </>
    )
}
