import { NavLink } from 'react-router-dom'
import '../stylesheets/menu.scss'

const selectedStyle = {
    backgroundColor: "#00b0e9",
    color: "#ffffff"
}

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/"><img src="../images/logo_site_white.png" className="logo" /></NavLink>
        <NavLink to="/sony" activeStyle={selectedStyle}>Sony</NavLink>
        <NavLink to="/audio-technica" activeStyle={selectedStyle}>Audio Technica</NavLink>
        <NavLink to="/sennheiser" activeStyle={selectedStyle}>Sennheiser</NavLink>
        <NavLink to="/akg" activeStyle={selectedStyle}>AKG</NavLink>
    </nav>