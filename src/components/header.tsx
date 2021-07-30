import * as React from "react"
import { graphql, Link } from "gatsby"

import HamburgerSVG from '../components/svg-assets/hamburger-svg';
import { EventHandler, MouseEventHandler } from "react"

interface HeaderPropType {
  siteTitle: string;
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const Header: React.FC<HeaderPropType> = ({ siteTitle, data}) => {
  const siteMetadata = data.site.siteMetadata
  const [dropDownState, setDropDownState] = React.useState<boolean>(false);

  const handleToggleMenu:MouseEventHandler = (event) => {
    setDropDownState(previousState => !previousState);
  }
  return(
    <header className='header'>
      <nav className='nav-sm'>
        <div className='nav-sm-flex-container'>
          <h1><Link to='/'>Jaymin Patel</Link></h1>
          <div style={{width: '24px'}} onClick={handleToggleMenu}>
            <HamburgerSVG />
          </div>
        </div>
        <ul className={dropDownState ? 'nav-sm-flex-container-ul active' : 'nav-sm-flex-container-ul'}>
          <li><Link className='nav-link nav-even' activeClassName='active-link' to='/'><span>Home</span></Link></li>
          <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/skills'><span>Skills</span></Link></li>
          <li><Link className='nav-link nav-even' activeClassName='active-link' to='/about'><span>About</span></Link></li>
          <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/blog'><span>Blog</span></Link></li>
          <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/contact'><span>Contact</span></Link></li>
        </ul>
      </nav>
      <nav className='nav'>
        <ul className="nav-ul">
          <div className="nav-links-group">
            <li><Link className='nav-link nav-even' activeClassName='active-link' to='/'><span>Home</span></Link></li>
            <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/skills'><span>Skills</span></Link></li>
            <li><Link className='nav-link nav-even' activeClassName='active-link' to='/about'><span>About</span></Link></li>
            <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/blog'><span>Blog</span></Link></li>
            <li><Link className='nav-link nav-odd' activeClassName='active-link' to='/contact'><span>Contact</span></Link></li>
          </div>
          <div className="nav-links-svg-group">
            <li><a className='nav-link' href={siteMetadata.twitter} target="_blank">
              <svg className='nav-link-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"/>
              </svg></a>
            </li>
            <li><a className='nav-link' href={siteMetadata.linkedin} target="_blank">
              <svg className='nav-link-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a></li>
            <li><a className='nav-link' href={siteMetadata.github} target="_blank">
              <svg className="nav-link-svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"/>
              </svg></a></li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
