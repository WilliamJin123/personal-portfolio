import { motion } from "motion/react"
import { useState, useRef, useEffect } from "react"
import "./Animation-page.css"
import Slideshow from "./img-slideshow"
import { AnimationSvgs } from "./Animation-svgs"
export default function Animations() {


    return (
        <div className="animations-main">

            <h1>Animations</h1>

            <Animation code={<></>} animation={<Slideshow />} />
        </div>
    )
}

function Animation({ children, code, animation }) {
    const [showAnim, setShowAnim] = useState(true)
    const animRef = useRef(null)
    const [dims, setDims] = useState([])
    useEffect(() => {
        const handleResize = () => {
            if (animRef.current) {
                console.log(animRef.current.offsetHeight)
                console.log(animRef.current.offsetWidth)
                const width = animRef.current.offsetWidth
                const height = animRef.current.offsetHeight
                setDims([width, height])
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className="animation-component">
            <div className="animation-menu">
                <h1>Image Slider</h1>
                <div className="options">
                    <button className="border-right" onClick={() => setShowAnim(true)}> {AnimationSvgs.eyeSvg()} View</button>
                    <button onClick={() => setShowAnim(false)}> {AnimationSvgs.codeSvg()} Code</button>
                </div>
            </div>
            <div className={`animation-window ${!showAnim ? 'hidden' : 'visible'}`} ref={animRef}>
                {animation}
            </div>
            <div className={`code-window ${showAnim ? 'hidden' : 'visible'}`} style={{ width: dims[0], height: dims[1] }}>{code}</div>
        </div>


    )
}