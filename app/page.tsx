import { TopBar } from './(top-bar)/TopBar'
import { Home } from './(home)/Home'
import { About } from './(about)/About'
import { Experience } from './(experience)/Experience'
import { Projects } from './(projects)/Projects'
import { Skills } from './(skills)/Skills'
import { Education } from './(education)/Education'
import { Contact } from './(contact)/Contact'
import { MobileTopBar } from './(mobile-top-bar)/MobileTopBar'

export default function App() {
    return (
        <>
            <TopBar />
            <MobileTopBar />
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
