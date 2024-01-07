import 'bootstrap/dist/css/bootstrap.min.css'
import "../Styles/MainStyle.css"
import "../Styles/Header.css"
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useRef } from 'react'

function DesctopHeader()
{
    return (
    <div class="header-up">
        <div class="container">
            <div class="row main-nav">
                <div class="col-2">
                    <img src="images/group-9.svg" alt="logo" class="logo" />
                </div>
                <div class="menu col-10">
                    <ul class="nav">
                        <li>
                            <a class="nav-item" href="">Поддержка сайтов</a>
                        </li>
                        <li class="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle class="dropdown-link" id="dropdown-basic">
                                    Тарифы
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Стартовый</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Бизнес</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">VIP</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <a class="nav-item" href="#cases">Наши работы</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#comments">Отзывы</a>
                        </li>
                        <li>
                            <a class="nav-item" href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

function MobileHeader ()
{
    return (
        <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="nm">
          <Container fluid>
            <Navbar.Brand href="#" > <img src="images/group-9.svg" alt="logo" class="logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='navbar-toggler'/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="top" className='palochki'>
              <Offcanvas.Header closeButton className='closeButton'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navbarBody'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='linkes'><a class="nav-item" href="">Поддержка сайтов</a></Nav.Link>
                  <Nav.Link href="#action2" className='linkes'><Dropdown>
                                <Dropdown.Toggle class="dropdown-link" id="dropdown-basic">
                                    Тарифы
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Стартовый</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Бизнес</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">VIP</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Nav.Link>
                  <Nav.Link href="#action1" className='linkes'><a class="nav-item" href="">Наши работы</a></Nav.Link>
                  <Nav.Link href="#action2" className='linkes'><a class="nav-item" href="">Отзывы</a></Nav.Link>
                  <Nav.Link href="#action1" className='linkes'><a class="nav-item" href="">Контакты</a></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
      );
}

function HeaderBackground()
{
    return (
        <>
        <div class="video">
            <video playsinline="" autoplay="autoplay" loop="true" class="fillWidth" preload="auto" muted>
                <source src="images/video.mp4" type="video/mp4"/>
            </video>
        </div>
        <div class="vector-img">
            <img src="/Images/druplicon.svg" alt=""/>
        </div>
    </>
    )
}

function HeaderVideo()
{
    return(
<div class="header-down">
        <div class="container">
            <div class="row">
                <div class="header-left col-md-6 col-sm-12">
                    <div class="container">
                        <h1 class="supportDr white-title">
                            Поддержка <br/> сайтов на Drupal 
                        </h1>
                    </div>
                    <div class="container">
                        <div class="under-support white-title">
                            Сопровождение и поддержка сайтов <br/>
                            на CMS Drupal любых версий и запущенности
                        </div>
                    </div>
                    <div class="block-main-wrapper">
                        <a href="#block-tariffs" class="block-main-btn">Тарифы</a>
                    </div>
                </div>
                <div class="header-right col-md-6 col-sm-12">
                    <div class="row">
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-img white-title">
                                    #1 
                                    <img src="images/cup.png" class="cup" alt=""/>
                                </div>
                                <div class="header-item-text white-title">
                                    Drupal-разработчик <br/>
                                    в России по версии <br/>
                                    Рейтинга Рунета
                                </div>
                            </div>
                        </div>
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-dig-3 white-title">
                                    3+ 
                                </div>
                                <div class="header-item-text-3 white-title">
                                    средний опыт <br/>
                                    специалистов более <br/>
                                    3 лет
                                </div>
                            </div>
                        </div>
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-dig-14 white-title">
                                    14 
                                </div>
                                <div class="header-item-text-14 white-title">
                                    лет опыта в сфере <br/>
                                    Drupal
                                </div>
                            </div>
                        </div>
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-dig white-title">
                                    200+
                                </div>
                                <div class="header-item-text white-title">
                                    модулей и тем <br/>
                                    в формате DrupalGive
                                </div>
                            </div>
                        </div>
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-dig white-title">
                                    35 000</div>
                                <div class="header-item-text white-title">
                                    часов поддержки <br/>
                                    сайтов на Drupal
                                </div>
                            </div>
                        </div>
                        <div class="header-item col-6 col-md-4 col-sm-6">
                            <div class="header-item-wrapper">
                                <div class="header-item-dig white-title">
                                    200+
                                </div>
                                <div class="header-item-text white-title">
                                    Проектов <br/>
                                    на поддержке
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    )
}

function Header() {

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    if(windowSize.current[0] > 992) return (
        <div class="header">
        <HeaderBackground/>
        <DesctopHeader />
        <HeaderVideo/>
        </div>)
    else return (
        <>
        <MobileHeader />
        <div class="header">
            <HeaderBackground/>
            <HeaderVideo/>
        </div>
        </>
    );
    
}

export default Header;