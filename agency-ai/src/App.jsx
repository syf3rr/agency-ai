import Navbar from './components/Navbar'
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Services from "./components/Services.jsx";
import OurWork from "./components/OurWork.jsx";
import Teams from "./components/Teams.jsx";
import ContactUs from "./components/СontactUs.jsx";
import Footer from "./components/Footer.jsx";
import {useEffect, useRef} from "react";

const App = () => {

    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    const mouse = useRef({x: 0, y: 0})
    const position = useRef({x: 0, y: 0})

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }
        document.addEventListener("mousemove", handleMouseMove)

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.1
            position.current.y += (mouse.current.y - position.current.y) * 0.1

            if(dotRef.current && outlineRef.current){
                dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
                outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
            }

            requestAnimationFrame(animate)
        }

        animate();

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    },[])

    return (
        <div>
            <Navbar/>
            <Hero/>
            <TrustedBy/>
            <Services/>
            <OurWork/>
            <Teams/>
            <ContactUs/>
            <Footer/>
            <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}></div>

            <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'></div>
        </div>
    )
}

export default App