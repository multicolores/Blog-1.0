import React, { useState, useEffect, useRef } from "react";
import { Link } from 'gatsby'

const everyPages = [
    { name: "Blog 1", path: "/Blog1Page" },
    { name: "Blog 2", path: "/Blog2Page" },
    { name: "Connexion", path: "/admin" },
];

const Menu = () => {

    let menu = useRef(null);
    // let revealMenu = useRef(null);
    // let Text = useRef(null);

    const [state, setState] = useState({
        initial: false,
        clicked: false,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Fermer"
            });
        } else if (state.clicked === true) {
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false) {
            setState({
                clicked: !state.clicked,
                menuName: 'Fermer'
            });

        }
    };

    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 0);
    };

    useEffect(() => {
        if (state.clicked === false) {
            // close the menu
            menu.style.display = "none";

        } else if (state.clicked === true || (state.clicked === true && state.initial === null)) {
            // open the menu
            menu.style.display = "block";
        }
    }, [state]);


    return (
        <>
            <button disabled={disabled} onClick={handleMenu} className="button_menu">{state.menuName}</button>

            <div ref={el => (menu = el)} className="nav_menu">
                <div className="menu_container">
                    <Link to="/" className="logo" title="Logo">Blog</Link>
                    <div className="links_container">
                        {everyPages.map(el => (
                            <Link to={el.path} key={el.name}>
                                {el.name}
                            </Link>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}


export default Menu