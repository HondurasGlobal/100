import React, { Component } from 'react'
import Axios from 'axios'
import { Alert, AlertTitle } from '@material-ui/lab';


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
            formSuccess: false,
            formFailed: false,
            userError: false
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

    sendPostRequest = (e) => {
        if (this.state.contactInfo.sendTo == "") {

            this.setState({ userError: true })
            setTimeout(() => {
                this.setState({ userError: false })
            }, 6000);

        } else {

            let config = {
                method: 'post',
                url: process.env.API_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.API_KEY,
                },
                data: this.state.contactInfo,
            }

            Axios(config)
                .then(response => {
                    console.log(response);
                    this.setState({ formSuccess: true })
                    setTimeout(() => {
                        this.setState({ formSuccess: false })
                    }, 6000);
                })
                .catch(response => {
                    console.log(response);
                    this.setState({ formFailed: true })
                    setTimeout(() => {
                        this.setState({ formFailed: false })
                    }, 6000);
                })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        {
                            this.state.formSuccess ?

                                <Alert variant="filled" severity="success" style={{ marginBottom: 15 }}>
                                    <AlertTitle>Succes!</AlertTitle>
                                    Email sent Successfully — <strong>We'll be in contact soon!</strong>
                                </Alert>

                            :
                            this.state.formFailed ?

                                <Alert variant="filled" severity="error" style={{ marginBottom: 15 }}>
                                    <AlertTitle>Error!</AlertTitle>
                                    There was an error while sending the Email — <strong>Try again!</strong>
                                </Alert>

                            : this.state.userError ?

                                <Alert variant="filled" severity="warning" style={{ marginBottom: 15 }}>
                                    <AlertTitle>Warning!</AlertTitle>
                                    Make sure you have filled and selected all the fields — <strong>Try again!</strong>
                                </Alert>

                            : null
                        }
                        <form method="post" action="/" onSubmit={e => { this.handleSubmit(e); this.sendPostRequest(e); }}>
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
                                    <option style={{ color: 'black' }} disabled selected>
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
                                    minLength="10"
                                    maxLength="350"
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
