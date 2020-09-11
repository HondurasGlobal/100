import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
      isLanguageSpanish: true,
      contactData: {
        name: '',
        email: '',
        emailTo: '',
        message: ''
      }
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

  handleLanguageChange() {
    this.setState({
      isLanguageSpanish: !this.state.isLanguageSpanish
    })
  }

  handleInputChange = event => {
    this.setState({
      contactData: {
        ...this.state.contactData,
        [event.target.name]: event.target.value
      }
    })

    console.log(this.state.contactData);
  }

  submitData = () => {
    const data = this.state.contactData

    axios.post(
      'https://gt90tti0y9.execute-api.us-east-2.amazonaws.com/dev/contact',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
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
          <Contact changed={this.handleInputChange} submit={this.submitData}/>
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} onLanguageChange={this.handleLanguageChange} language={this.state.isLanguageSpanish}/>
      </div>
    )
  }
}

export default Layout
