import "./svg-hover.css"
import { useRef, useState, useEffect } from "react"
import { motion } from "motion/react"
import { handleMouseMove } from "./svg-mouse-handlers"
export default function SvgHover({ children, divRef, index, percentX, percentY, onTab, selected, svgRef}) {
   
    const [adjust, setAdjust] = useState(1)
    useEffect(() => {
        if (children && children.type === "svg") {
            const childViewBox = children.props.viewBox || "0 0 24 24"
            
            
            const [x, y, width, height] = childViewBox.split(" ").map(Number)
            
            
            setAdjust(Math.max((width - x) / 24, (height - y) / 24 ))
            
        }
    }, [children])
    
    

    const adjustedPercentX = percentX * adjust
    const adjustedPercentY = percentY * adjust

    return (
        <div className="svg-div" ref={svgRef}>


            <svg xmlns="http://www.w3.org/2000/svg" className="svg-to-hover" >
                <defs>
                    <radialGradient
                        id={`hoverGradient${index}`}
                        key={index}
                        gradientUnits="userSpaceOnUse"
                        r={`${adjust*50}%`}
                        viewBox="0 0 24 24"
                        cx={`${adjustedPercentX}%`}
                        cy={`${adjustedPercentY}%`}

                    >
                        {onTab && <stop offset="0%" stopColor={selected ? 'var(--selected-gradient)' : 'var(--default-gradient)'} />}
                        <stop offset={1} stopColor="#FFFFFF" />
                    </radialGradient>
                </defs>
                    

            </svg>

            {children}
        </div>
    )
}
