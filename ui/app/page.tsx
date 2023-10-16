import { TopBar } from './(top-bar)/TopBar'
import { Home } from './(home)/Home'
import { About } from './(about)/About'
import { Projects } from './(projects)/Projects'
import { MobileTopBar } from './(mobile-top-bar)/MobileTopBar'
import { Footer } from './(footer)/Footer'
import { SectionRevealContainer } from './(components)/(section-reveal-container)/SectionRevealContainer'
import { TopBarContainer } from './(top-bar)/TopBarContainer'
import { Experience } from './(experience)/Experience'

export default function App() {

    return (
        <SectionRevealContainer>
            <TopBarContainer>
                <TopBar />
                <MobileTopBar />
            </TopBarContainer>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </SectionRevealContainer>
    )
}
