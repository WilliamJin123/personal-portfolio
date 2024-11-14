import "./sidebar.css"
import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { iconList } from "./icons"
import { AnimatePresence, motion } from "motion/react"
import { useExpanded } from "../Expanded_context"
import SvgHover from "../custom-svgs/svg-hover"
const expandSvg = () => (<svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>)


const enterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -5, opacity: 0, transition: { duration: 0.1, delay: 0.125 } },
}
export default function Sidebar() {
    const { expanded, toggleExpanded } = useExpanded()
    const [selected, setSelected] = useState(iconList.findIndex(item => item.link === location.pathname) || 0)
    return (
        <motion.div className="sidebar"
            variants={{
                hidden: { width: '4.5vw' },
                visible: { width: '16.5vw' }
            }}
            initial="hidden"
            animate={expanded ? "visible" : "hidden"}
            transition={{ delay: 0.125 }}
        >
            <ul className="sidebar-list">
                {iconList.map((item, index) => (

                    <Tab

                        handleClick={() => setSelected(index)} selected={selected === index} key={index} icon={item.icon} desc={item.desc} link={item.link} expanded={expanded} />
                ))}
            </ul>
            <button className="expand-btn" onClick={toggleExpanded}>
                <motion.span animate={{ rotate: expanded ? '-180deg' : 0 }} transition={{ delay: 0.2, duration: 0.1 }}>{expandSvg()}</motion.span>
                <AnimatePresence>
                    {expanded && (
                        <motion.span
                            variants={enterVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ delay: 0.2 }}
                        >Hide</motion.span>
                    )}
                </AnimatePresence>

            </button>
        </motion.div>
    )
}

function Tab({ icon, desc, link, expanded, selected, handleClick }) {

    return (
        <Link to={link} onClick={handleClick} >
            <SvgHover >
            <motion.li layout className={`tab ${selected ? "selected" : ""}`} 
                variants={{
                    hidden: { width: '3vw' },
                    visible: { width: '15vw' }
                }}
                initial="hidden"
                animate={expanded ? "visible" : "hidden"}
                transition={{ delay: 0.125 }}
            >
                
                    <motion.span layout className="icon">{icon()}</motion.span>

                    <AnimatePresence>
                        {expanded && (<motion.span className="desc"
                            variants={enterVariants}
                            transition={{ delay: 0.2 }}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >{desc}</motion.span>)}
                    </AnimatePresence>


            </motion.li>
            </SvgHover>
        </Link>
    )
} 