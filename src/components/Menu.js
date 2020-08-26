import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/loquesabemos">
            Lo Que Sabemos
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/newstack">
            Newstack
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/semanaacademica">
            Semana Academica
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/podcast">
            Podcast
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/socios">
            Socios
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/historia">
            Historia
          </Link>
        </li>
      </ul>

      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            English
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

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
