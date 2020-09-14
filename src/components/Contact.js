import React, { Component } from 'react'
import Axios from 'axios'
import { ToastProvider, useToasts } from 'react-toast-notifications'


const FormWithToasts = () => {
  const { addToast } = useToasts()

  const callToast = async value => {
      addToast('Saved Successfully', { appearance: 'success' })
  }

  return <button onClick={callToast}>...</button>
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: {
        name: '',
        email: '',
        sendTo: '',
        message: '',
      },
    }
  }

  handleContactChange = e => {
    this.setState({
      contactInfo: {
        ...this.state.contactInfo,
        [e.target.name]: e.target.value,
      },
    })
    
    console.log(this.state.contactInfo.sendTo)
    
  }

  sendPostRequest = () => {
    let config = {
      method: 'post',
      url:
        'https://dhkqeb8zsi.execute-api.us-east-2.amazonaws.com/Development/contact',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'LZ0lad1IyKQD3MBA5LBHak4Hg8OPmdX3PwQl2JRb',
      },
      data: this.state.contactInfo,
    }
    
    Axios(config)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.sendPostRequest()
  }

  render() {
    return (
      <ToastProvider>
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" action="/" onSubmit={e => this.handleSubmit(e)}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.handleContactChange}
                  value={this.name}
                  required
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleContactChange}
                  value={this.email}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="sendTo">Dirigido a:</label>
                <select name="sendTo" required onChange={e => this.handleContactChange(e)}>
                  <option style={{ color: 'black' }} defaultValue>
                    Selecciona una opción
                  </option>
                  <option
                    style={{ color: 'black' }}
                    value="maynorx5000@gmail.com"
                  >
                    Asociarse
                  </option>
                  <option
                    style={{ color: 'black' }}
                    value="fialloschris1@gmail.com"
                  >
                    Propuestas
                  </option>
                  <option style={{ color: 'black' }} value="mayky12@yahoo.com">
                    Proyectos
                  </option>
                  <option style={{ color: 'black' }} value="mdpc5000@gmail.com">
                    Investigacion
                  </option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  onChange={this.handleContactChange}
                  value={this.message}
                  required
                ></textarea>
              </div>
              <ul className="actions">
                <li>
                  <button type='submit'> Send</button>
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
            <FormWithToasts></FormWithToasts>
          </section>

          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="#">information@untitled.tld</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(000) 000-0000 x12387</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Address</h3>
                <span>
                  1234 Somewhere Road #5432
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States of America
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
      </ToastProvider>
    )
  }
}

export default Contact
