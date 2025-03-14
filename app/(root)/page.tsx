import Hero from "../component/hero"
import InfoFooter from "../component/info-footer"
import WriteUp from "../component/write-up"

const Home = () =>{
    return(
        <main>
            <Hero/>
            <WriteUp/>
            <InfoFooter/>
        </main>
    )
}

export default Home