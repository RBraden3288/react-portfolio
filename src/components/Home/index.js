import React from 'react';
import { Link } from 'react-router-dom';
import './home-style.css';
import {
    Row,
    Col
} from 'reactstrap';
import mark from '../../images/GitHub-Mark-32px.png';
import linkedin from '../../images/linkedin2.png';
import email from '../../images/email.png';
import laptop from '../../images/laptop.png';
import woman from '../../images/woman-avatar.png';

function Home() {
    return (
        <div className='home'>
            <Row>
                <div className='links-container'>
                    <div className='links-div'>
                        <Link to='/about' className='link'>
                            <img src={woman} alt='me'></img>
                            <br />about me
                        </Link>
                    </div>
                    <div className='links-div'>
                        <Link to='/portfolio' className='link'>
                            <img src={laptop} alt='laptop'></img>
                            <br />portfolio
                        </Link>
                    </div>
                    <div className='links-div'>
                        <Link to='/contact' className='link'>
                            <img src={email} alt='email'></img>
                            <br />contact
                        </Link>
                    </div>
                    <div className='links-div bottom'>
                        <div className='logo-div-left'>
                            <a href='https://linkedin.com/in/randall-braden-022219143' target='blank' >
                                <img src={linkedin} alt='linkedin'></img>
                            </a>
                        </div>
                        <div className='logo-div-right'>
                            <a href='https://github.com/RBraden3288' target='blank'>
                                <img src={mark} alt='github'></img>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <Col> */}
                <div className='home-headings'>
                    <h1>Randall Braden <hr /></h1>
                    <h5>A junior web-developer with experience in languages and technoliges such as: </h5>
                    <h6>javascript, nodejs, mongo, sequel, express, reactjs, html, &amp; css</h6>
                </div>
                {/* </Col> */}
            </Row>
        </div>
    )
};

export default Home;