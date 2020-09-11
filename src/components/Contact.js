import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={props.send} value={props.name}/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={props.send} value={props.email}/>
                    </div>
                    <div className="field">
                        <label htmlFor="dropDown">Dirigido a:</label>
                        <select name="dropDown" required onChange={props.send}>
                            <option defaultValue value="maynorx5000@gmail.com">Asociarse</option>
                            <option value="fialloschris1@gmail.com">Propuestas</option>
                            <option value="mayky12@yahoo.com">Proyectos</option>
                            <option value="mdpc5000@gmail.com">Investigacion</option>
                            
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6" onChange={props.send} value={props.message}></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" onSubmit="return false"   /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                    
                </form>
                <button onClick={props.postIt}></button>
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
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
