import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Honduras Global"
          meta={[
            {
              name: 'description',
              content: 'Honduras Global Red de Conocimiento para el Desarrollo',
            },
            { name: 'keywords', content: 'Honduras, Global' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Esto Es Lo Que Sabemos</h3>
                <p>Canal de ciencia y medicina en Youtube</p>
              </header>
              <Link to="/loquesabemos" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Newstack</h3>
                <p>Grupo de apoyo para programadores Fullstack Serverless</p>
              </header>
              <Link to="/newstack" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Semana Academica</h3>
                <p>Eventos para estudiantes</p>
              </header>
              <Link to="/semanaacademica" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Podcast</h3>
                <p>Topicos de interes general en formato largo</p>
              </header>
              <Link to="/podcast" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Socios</h3>
                <p>Directorio de socios y colaboradores</p>
              </header>
              <Link to="/socios" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Historia</h3>
                <p>La historia de Honduras Global</p>
              </header>
              <Link to="/historia" className="link primary"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>La Fundacion</h2>
              </header>
              <p>
                La fundación Honduras Global, fundada en 2011, tiene como
                objetivo identificar y conectar a Hondureños altamente
                calificados en todo el mundo con el fin de promover la
                transferencia de conocimiento y promover la innovación y el
                desarrollo científico, tecnológico y empresarial en Honduras.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Comenzar
                  </Link>
                </li>
        </ul> */}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
