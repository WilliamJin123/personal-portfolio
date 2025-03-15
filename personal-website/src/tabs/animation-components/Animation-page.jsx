import { motion } from "motion/react"
import { useState, useRef, useEffect, lazy, Suspense } from "react"
import "./Animation-page.css"
import { AnimationSvgs } from "./Animation-svgs"

import SvgHover from "../../custom-svgs/svg-hover"
import { handleMouseEnter, handleMouseLeave, handleMouseMove } from "../../custom-svgs/svg-mouse-handlers"


const Border = lazy(() => import("./Fancy-border"))
const Slideshow = lazy(() => import("./img-slideshow/img-slideshow"))
export default function Animations() {


    const itemList = [
        { code: () => (<></>), animation: () => (<Slideshow />) },

    ]

    return (

            
        <div className="animations-main ">
            <h1>Animations</h1>
            {itemList.map((item, index) => (
                <Animation code={item.code()} animation={item.animation()} index={index} key={index} />
            ))}
        </div>
        


    )
}

function Animation({ children, code, animation, index }) {
    const [showAnim, setShowAnim] = useState(true)
    const animRef = useRef(null)
    const [dims, setDims] = useState([])
    useEffect(() => {
        const handleResize = () => {
            if (animRef.current) {

                const width = animRef.current.offsetWidth
                const height = animRef.current.offsetHeight
                setDims([width, height])
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const eyeRef = useRef(null)
    const eyeSvgRef = useRef(null)
    const [onEye, setOnEye] = useState(false)
    const [eyeDim, setEyeDim] = useState([])
    const [eyePercentX, setEyePercentX] = useState(0)
    const [eyePercentY, setEyePercentY] = useState(0)
    const codeRef = useRef(null)
    const codeSvgRef = useRef(null)
    const [onCode, setOnCode] = useState(false)
    const [codeDim, setCodeDim] = useState([])
    const [codePercentX, setCodePercentX] = useState(0)
    const [codePercentY, setCodePercentY] = useState(0)
    useEffect(() => {
        if (eyeSvgRef.current) {
            // Get SVG's width and height after render
            const rect = eyeSvgRef.current.getBoundingClientRect()

            setEyeDim([rect.width, rect.height])
        }
    }, [eyeRef])
    useEffect(() => {
        if (codeSvgRef.current) {
            // Get SVG's width and height after render
            const rect = codeSvgRef.current.getBoundingClientRect()

            setCodeDim([rect.width, rect.height])
        }
    }, [codeRef])
    return (
        <div className="animation-component">
            <div className="animation-menu">
                <h1>Image Slider</h1>
                <div className="options">
                    <button className="border-right" onClick={() => setShowAnim(true)} ref={eyeRef}
                        onMouseEnter={() => handleMouseEnter(setOnEye)}
                        onMouseLeave={() => handleMouseLeave(setOnEye)}
                        onMouseMove={(e) => handleMouseMove(e, onEye, setEyePercentX, setEyePercentY, eyeRef, eyeDim[0], eyeDim[1])}
                    >
                        <SvgHover
                            divRef={eyeRef} index={`Eye${index}`} percentX={eyePercentX} percentY={eyePercentY} onTab={onEye} selected={showAnim} svgRef={eyeSvgRef}
                        >
                            {AnimationSvgs.eyeSvg()}
                        </SvgHover>
                        <span className={`text ${showAnim ? "in-view" : onEye ? "hovered" : ""}`}>View</span></button>
                    <button onClick={() => setShowAnim(false)} ref={codeRef}
                        onMouseEnter={() => handleMouseEnter(setOnCode)}
                        onMouseLeave={() => handleMouseLeave(setOnCode)}
                        onMouseMove={(e) => handleMouseMove(e, onCode, setCodePercentX, setCodePercentY, codeRef, codeDim[0], codeDim[1])}
                    >
                        <SvgHover
                            divRef={codeRef} index={`Code${index}`} percentX={codePercentX} percentY={codePercentY} onTab={onCode} selected={!showAnim} svgRef={codeSvgRef}
                        >{AnimationSvgs.codeSvg()}</SvgHover>
                        <span className={`text ${!showAnim ? "in-view" : onCode ? "hovered" : ""}`}>Code</span></button>
                </div>
            </div>
            <div style={{ width: '100%', height: "fit-content", position: "relative", borderRadius: "5px" }}>
                <div className={`animation-window ${!showAnim ? 'hidden' : 'visible'}`} ref={animRef}>
                    {animation}

                </div>
                <div className={`code-window ${showAnim ? 'hidden' : 'visible'}`} style={{ width: dims[0], height: dims[1] }}>{code}</div>
                <Suspense>
                    <Border/>
                </Suspense>
            </div>


        </div>


    )
}