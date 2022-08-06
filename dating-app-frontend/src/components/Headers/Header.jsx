import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum'

import "./Header.css"

const Header = ()=>{
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}

export default Header   