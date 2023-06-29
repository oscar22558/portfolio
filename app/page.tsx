import { TopBar } from './(top-bar)/TopBar'
import { Home } from './(home)/Home'
import { About } from './(about)/About'
import { Projects } from './(projects)/Projects'
import { Skills } from './(skills)/Skills'
import { Contact } from './(contact)/Contact'
import { MobileTopBar } from './(mobile-top-bar)/MobileTopBar'
import { Resume } from './(resume)/Resume'
import { Footer } from './(footer)/Footer'
import { SectionRevealContainer } from './(components)/(section-reveal-container)/SectionRevealContainer'

export default function App() {

    return (
        <SectionRevealContainer>
            <TopBar />
            <MobileTopBar />
            <Home />
            <About />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
            <Footer />
        </SectionRevealContainer>
    )
}
