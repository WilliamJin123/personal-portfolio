
export function handleMouseEnter(setState){
    setState(true)

}

export function handleMouseLeave(setState){
    setState(false)

}

export function handleMouseMove(event, onSvg, setPercentX, setPercentY, divRef, svgWidth, svgHeight) {
    if (onSvg) {
        const rect = divRef.current.getBoundingClientRect()
        const x = (event.clientX - rect.left) / svgWidth * 100
        const y = (event.clientY - rect.top) / svgHeight * 100
        setPercentX(x)
        setPercentY(y)
    }

}