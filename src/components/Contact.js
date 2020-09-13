import React, { Component } from 'react'
import Axios from 'axios'
import aws4 from 'aws-signature-v4';

class Contact extends Component {
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



    let request = {
      host: 'dhkqeb8zsi.execute-api.us-east-2.amazonaws.com',
      method: 'POST',
      url: 'https://dhkqeb8zsi.execute-api.us-east-2.amazonaws.com/Development/contact',
      data: this.state.contactInfo, // object describing the foo
      body: JSON.stringify(this.state.contactInfo), // aws4 looks for body; axios for data  
      headers: {
        'content-type': 'application/json'
      }
    }
    
    let signedRequest = aws4.sign(request,
      {
        // assumes user has authenticated and we have called
        // AWS.config.credentials.get to retrieve keys and
        // session tokens
        secretAccessKey: AWS.config.credentials.secretAccessKey,
        accessKeyId: AWS.config.credentials.accessKeyId,
        sessionToken: AWS.config.credentials.sessionToken
      })
    
    delete signedRequest.headers['Host']
    delete signedRequest.headers['Content-Length']
    
    let info = Axios(signedRequest)
    console.log(info);




    /*
    console.log("Its in");
    var config = {
      method: 'post',
      url:
        'https://dhkqeb8zsi.execute-api.us-east-2.amazonaws.com/Development/contact',
      headers: {
        'X-Amz-Date': '20200911T171447Z',
        Authorization:
          'AWS4-HMAC-SHA256 Credential=AKIARBGEDMUEYH3PPEV7/20200911/us-east-2/execute-api/aws4_request, SignedHeaders=dropdown;email;host;message;name;x-amz-content-sha256;x-amz-date, Signature=15173f56ed4389e9da9cecadeb99877fb08021e337aeef5dfa3d6defac768574',
        'Content-Type': 'text/plain',
      },
      data: this.state.contactInfo,
    }

    Axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data))
      })
      .catch(function(error) {
        console.log(error)
      })

      */
  }

  render() {
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form
              method="post"
              onSubmit={this.sendPostRequest}
            >
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.send}
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
                  onChange={this.send}
                  value={this.email}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="dropDown">Dirigido a:</label>
                <select name="dropDown" required onChange={this.send}>
                  <option style={{ color: 'black' }} selected>
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
                  onChange={this.send}
                  value={this.message}
                ></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input type="submit" />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
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
    )
  }
}

export default Contact
