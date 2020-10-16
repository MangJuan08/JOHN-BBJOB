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

                </div>
                <div className="col-lg-6">
                    <img src="https://image.shutterstock.com\/image-photo\/wind-turbine-asian-mechanical-engineer-260nw-1414882847.jpg" id="prodotto-fortissimo-1" class="prodotto-fortissimo" alt="" />
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
