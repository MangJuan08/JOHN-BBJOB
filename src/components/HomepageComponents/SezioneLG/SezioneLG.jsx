import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';
import arraySubMenu from './arraySubMenu.json';
import images from './images.json';

const styleP = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    textTransform: "uppercase",

}
function SezioneLG() {
    return (
        <React.Fragment>

            <div className="row">
                <div className="col-lg-2" key="imagesgroup">
                    <img src="https://www.olimpiaclubcomo.it/wp-content/uploads/2019/02/instagram-logo-color-256.png" alt="" style={{ "width": "30%" }} id="Header-logo"></img>
                </div>
                <div className="col-lg-10">
                    <ReactBootstrap.Navbar expand="lg" style={{ background: "transparent" }}>
                        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                            <ReactBootstrap.Nav className="ml-auto">

                                <ReactBootstrap.NavDropdown title="Item 1" id="basic-nav-dropdown">
                                    {
                                        arraySubMenu.map((item) => <ReactBootstrap.NavDropdown.Item href={item.link} key={item.id}>{item.name}<ReactBootstrap.Dropdown.Divider></ReactBootstrap.Dropdown.Divider></ReactBootstrap.NavDropdown.Item>)
                                    }

                                </ReactBootstrap.NavDropdown>
                                <ReactBootstrap.Nav.Link href="/#home" id="12">Item 2</ReactBootstrap.Nav.Link>
                            </ReactBootstrap.Nav>

                        </ReactBootstrap.Navbar.Collapse>
                    </ReactBootstrap.Navbar>
                </div>
            </div>
            <div className="row">

                <div className="col-lg-12">
                    <ReactBootstrap.Carousel >

                        {
                            images.map((item) => <ReactBootstrap.Carousel.Item key={item.idImage}> <img
                                className="d-block w-100"
                                src={item.url}
                                alt="Third slide"

                            />      <ReactBootstrap.Carousel.Caption><h3>{item.title}</h3>
                                </ReactBootstrap.Carousel.Caption> </ReactBootstrap.Carousel.Item>)
                        }


                    </ReactBootstrap.Carousel>



                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1>riga 174 lg.json(laktaw muna)</h1>
                </div>
                <div className="col-lg-6">

                </div>
            </div>
            <hr></hr>
            <div className="row">
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-6">
                            <strong>Il nostro prodotto</strong> è fortissimo
                            </div>
                        <div className="col-lg-6"> <img
                            src="https:\\image.shutterstock.com/image-photo/wind-turbine-asian-mechanical-engineer-260nw-1414882847.jpg"
                            id="prodotto-fortissimo-1" class="prodotto-fortissimo" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12"> <img
                            src="https://image.shutterstock.com/image-photo/landscape-wind-turbines-that-produce-600w-1529737649.jpg"
                            id="prodotto-fortissimo-2" class="prodotto-fortissimo" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>PROGETTI <strong>"SU MISURA"</strong>
                            </p>
                            <p>La possibilità di
                            customizzazione del prodotto ci
                            rende i partner ideali per studi
                            di progettazione che richiedono
                            una forte personalizzazione dle
                        prodotto!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="colo-lg-12">
                            <p>PRODUTTORI
                            AL
                    <strong>100%
                    </strong>

                            </p>

                            <p>Progettando
                            e
                            realizzando
                            i
                            nostri
                            prodotti
                            garantiamo
                            standard
                            elevati
                            e
                    <strong>garanzia
                                di
                                qualit\u00E0
                    </strong>
                    .
                </p>
                            <p>Uno
                    <strong>standard
                                elevato
                    </strong>
                    sotto
                    tutti
                    i
                    punti
                    di
                    vista
                </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <img src="https:\\image.shutterstock.com/image-photo/greek-wind-park-on-snowed-260nw-1654044058.jpg"
                                id="prodotto-fortissimo-3" class="prodotto-fortissimo" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p style={styleP}>I nostri punti cardine</p>
                </div>
            </div>


        </React.Fragment>


    )
}

export default SezioneLG
