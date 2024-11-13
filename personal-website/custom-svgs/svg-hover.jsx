import "./svg-hover.css"
import { useRef, useState, useEffect } from "react"

export default function SvgHover({ children }) {
    const [percentX, setPercentX] = useState(0)
    const [percentY, setPercentY] = useState(0)
    const [onSvg, setOnSvg] = useState(false)
    const divRect = useRef(null)
    const divRef = useRef(null)

    useEffect(() => {
        divRect.current = divRef.current.getBoundingClientRect()
    }, [divRef])


    function handleMouseMove(event) {
        if (onSvg) {
            setPercentX((event.clientX - divRect.current.left) / divRect.current.width * 100)
            setPercentY((event.clientY - divRect.current.top) / divRect.current.height * 100)
        }

    }

    return (
        <div ref={divRef} className="svg-div"
            onMouseEnter={() => setOnSvg(true)}
            onMouseLeave={() => setOnSvg(false)}
            onMouseMove={handleMouseMove}>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-to-hover">
                <defs>
                    <radialGradient
                        id="hoverGradient"
                        gradientUnits="userSpaceOnUse"
                        r="35%"
                        cx={`${percentX}%`}
                        cy={`${percentY}%`}
                    >
                        {onSvg ? <stop offset="0%" stopColor="#FF0000" /> : null}
                        <stop offset={1} stopColor="#FFFFFF" />
                    </radialGradient>
                </defs>
            </svg>
            {children}
        </div>
    )
}
