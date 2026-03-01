
import React, { useState } from "react"
import './Drop.css';
import {BsPersonCircle} from "react-icons/bs"


function Drop() {
    const [isOpen, setOpen] = useState(false);

    return(
        <header className="header">
            <button className="menu-button" onClick={() => setOpen(!isOpen)}>
                <BsPersonCircle/>
            </button>
            <nav className={`menu ${isOpen ? "active" : ""}`}>
                <ul className='menu_list'>
                    <a href="/"><li className="menu_item">О котах</li></a>
                    
                    <a href="/future"><li className="menu_item">Уход за котами</li></a>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Drop