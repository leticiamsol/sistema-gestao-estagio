import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

function Header()
{
    return (
        <div>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">

                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="/isla_icon.png" alt="logo-sm" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="/isla.png" alt="logo-dark" height={35} />
                                </span>
                            </a>

                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <FontAwesomeIcon icon={faBars} style={{ fontSize: 21 }} className="align-middle" />
                        </button>
                        
                    </div>

                    <div className="d-flex">
                        <Dropdown className="d-inline-block user-dropdown">
                            <Dropdown.Toggle variant="transparent" id="page-header-user-dropdown">
                            <img className="rounded-circle header-profile-user" src="/user.png" alt="Header Avatar" />
                            <span className="d-none d-xl-inline-block ms-1">Julia</span>
                            <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-end">
                            <Dropdown.Item href="#"><i className="ri-user-line align-middle me-1"></i> Profile</Dropdown.Item>
                            <Dropdown.Item href="#"><i className="ri-wallet-2-line align-middle me-1"></i> My Wallet</Dropdown.Item>
                            <Dropdown.Item href="#"><span className="badge bg-success float-end mt-1">11</span><i className="ri-settings-2-line align-middle me-1"></i> Settings</Dropdown.Item>
                            <Dropdown.Item href="#"><i className="ri-lock-unlock-line align-middle me-1"></i> Lock screen</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item className="text-danger" href="#"><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header;