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
        dropDown: '',
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

    console.log(this.state.contactInfo.dropDown)
  }

  sendPostRequest = () => {

    var config = {
    method: 'post',
    url: 'https://dhkqeb8zsi.execute-api.us-east-2.amazonaws.com/Development/contact',
    headers: {  
      'X-Amz-Date': '20200911T171447Z', 
      'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIARBGEDMUEYH3PPEV7/20200911/us-east-2/execute-api/aws4_request, SignedHeaders=dropdown;email;host;message;name;x-amz-content-sha256;x-amz-date, Signature=15173f56ed4389e9da9cecadeb99877fb08021e337aeef5dfa3d6defac768574', 
      'Content-Type': 'text/plain'
    },
    data : this.state.contactInfo
};

Axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
    /*
    const config = {
      headers: { 
        'X-Amz-Content-Sha256': 'beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3', 
        'X-Amz-Date': '20200911T171447Z', 
        'Authorization': 'AWS4-HMAC-SHA256 Credential=AKIARBGEDMUEYH3PPEV7/20200911/us-east-2/execute-api/aws4_request, SignedHeaders=dropdown;email;host;message;name;x-amz-content-sha256;x-amz-date, Signature=15173f56ed4389e9da9cecadeb99877fb08021e337aeef5dfa3d6defac768574', 
        'Content-Type': 'text/plain'      
      },
    }

    Axios.post(
      'https://dhkqeb8zsi.execute-api.us-east-2.amazonaws.com/Development/contact',
      this.state.contactInfo,
      config
    ).then(function(response) {
      console.log(response)
    })
    */
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
