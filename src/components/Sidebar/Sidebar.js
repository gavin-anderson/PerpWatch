import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import { ReactComponent as Twitter } from '../../assets/twitter-alt.svg';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as MenuBurger } from '../../assets/menu-burger2.svg';
import { ReactComponent as Stats } from '../../assets/stats.svg';
import { ReactComponent as Home } from '../../assets/house-chimney.svg';
import { ReactComponent as Coin } from '../../assets/coins.svg';
import { ReactComponent as Logo } from '../../assets/logo/purple.svg';

const Sidebar = () => (
  <div className="sidebar">
    <div className='flex-top'>
      <span className='link'><MenuBurger className='burger'/> <span className='disappear'><Logo className='logo'/></span></span>
    </div>
     
    <nav> 
      <div className='flexbox-container'><Link to="/home" className="link"><Home className='icon'/><span className='disappear'>Home</span></Link></div>
      <div className='flexbox-container'><Link to="/delta-neutral-engine" className="link"><Stats className='icon'/><span className='disappear'>Delta Neutral Engine</span></Link></div> 
      <div className='flexbox-container'><Link to="/markets" className="link"><Coin className='icon'/><span className='disappear'>Perpetual Markets</span></Link></div> 
    </nav>
    <div className="social-links">
      <div className='flexbox-container'> <a href="https://twitter.com" target="_blank" rel = "noopener noreferrer"className='link'><Twitter className='icon'/><span className='disappear'>Twitter</span></a></div>
      <div className='flexbox-container'> <a href="https://github.com" target="_blank" rel = "noopener noreferrer" className='link'><GitHub className='icon'/><span className='disappear'>GitHub</span></a></div> 
    </div>
  </div>
);

export default Sidebar;
