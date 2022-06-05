import React from 'react'
import './logosearch.css'
import Logo from '../../img/logo.png';
import SearchIcon from '@mui/icons-material/Search';
const LogoSearch = () => {
  return (
    <div className='logosearch'>
        <img src={Logo} alt="logo"/>
        <div className="search">
            <input type="text" placeholder='#Explore' />
            <SearchIcon className="search_icon" variant="contain"/>
        </div>
    </div>
  )
}

export default LogoSearch