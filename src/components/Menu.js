import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => {
  const [ home, setHome ] = useState('');
  const [ whatWeKnow, setwhatWeKnow ] = useState();
  const [ academicWeek, setAcademicWeek ] = useState();
  const [ partners, setPartners ] = useState();
  const [ history, setHistory ] = useState();
  const [ languageButton, setlanguageButton ] = useState();

  useEffect(() => {
    if (props.language) {
      setHome('Inicio')
      setwhatWeKnow('Lo Que Sabemos')
      setAcademicWeek('Semana Academica')
      setPartners('Socios')
      setHistory('Historia')
      setlanguageButton('English')
    } else {
      setHome('Home')
      setwhatWeKnow('What We Know')
      setAcademicWeek('Academic Week')
      setPartners('Partners')
      setHistory('History')
      setlanguageButton('Español')
    }
  }, [props.onLannguageChange, props.language])

  return (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            { home }
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/loquesabemos">
            { whatWeKnow }
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/newstack">
            Newstack
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/semanaacademica">
          { academicWeek }
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/podcast">
            Podcast
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/socios">
            { partners }
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/historia">
            { history }
          </Link>
        </li>
      </ul>

      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit" onClick={props.onLanguageChange}>
            { languageButton }
          </a>
        </li>
        {/*}
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
                </li>*/}
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
  )
}

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
  onLanguageChange: PropTypes.func,
  language: PropTypes.bool
}

export default Menu
