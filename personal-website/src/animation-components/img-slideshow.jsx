import { AnimatePresence, motion, useScroll } from "motion/react"
import "./img-slideshow.css"
import { images } from "./img-list"
import { useState, useEffect} from "react";


const swipeThreshold = 10000
const swipePower = (offset, velocity) => Math.abs(offset) * velocity

export default function Slideshow() {
    
    const [page, setPage] = useState(0)
    const [dir, setDir] = useState(0)

    function setNext(increment) {
        setPage(page + increment)
        setDir(increment)
     
    }
    const imageIndex = ((page % images.length) + images.length) % images.length

    function handleDragEnd(event, panInfo) {
        const swipe = swipePower(panInfo.offset.x, panInfo.velocity.x)
        if (Math.abs(swipe) >= swipeThreshold) {
            const increment = Math.sign(swipe)
            setNext(-1 * increment)
        }
    }

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const imageVariants = {
        enter: dir => ({
            x: dir > 0 ? width : -1 * width,
            opacity: 0,

        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            

        },
        exit: dir => ({
            x: dir < 0 ? width : -1 * width,
            opacity: 0,
            zIndex: 0
        }),
    }
    return(
        <div className="slideshow">
            <div className="dimension-fill"></div>
            <AnimatePresence initial={false} custom={dir}>
                <motion.img
                  
                    key = {page}
                    custom={dir}
                    variants={imageVariants}
                    src={images[imageIndex]}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={handleDragEnd}
                />
            </AnimatePresence>
            <div className="slideshow-button next" onClick={() => setNext(1)}>{"‣"}</div>
            <div className="slideshow-button prev" onClick={() => setNext(-1)}>{"‣"}</div>
        </div>
    )
}