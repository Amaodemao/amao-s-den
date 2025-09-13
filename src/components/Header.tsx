import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="container">
                <nav aria-label="Primary">
                    <Link className="logo" to="/#top"> Amao's Den ✦</Link>
                    <input type="checkbox" id="menuToggle" aria-label="Open menu" />
                    <label id="hamburger" htmlFor="menuToggle">☰</label>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/journal">Journal</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}