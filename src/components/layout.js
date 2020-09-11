import React from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
import Axios from 'axios'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
      isLanguageSpanish: true,
      contactInfo: {
        name: '',
        email: '',
        sendTo: '',
        message: '',
      },
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  handleContactChange = e => {
    this.setState({
      contactInfo: {
        ...this.state.contactInfo,
        [e.target.name]: e.target.value,
      },
    })
  }

  sendPostRequest = () => {
    
  }

  handleLanguageChange() {
    this.setState({
      isLanguageSpanish: !this.state.isLanguageSpanish,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children}
          <Contact
            send={event => this.handleContactChange(event)}
            postIt={this.sendPostRequest}
            name={this.state.contactInfo.name}
            email={this.state.contactInfo.email}
            sendTo={this.state.contactInfo.sendTo}
            message={this.state.contactInfo.message}
          />
          <Footer />
        </div>
        <Menu
          onToggleMenu={this.handleToggleMenu}
          onLanguageChange={this.handleLanguageChange}
          language={this.state.isLanguageSpanish}
        />
      </div>
    )
  }
}

export default Layout
