import React from 'react';

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
                                    <img src="/isla_logo.png" alt="logo-sm" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="/isla_logo.png" alt="logo-dark" height={50} />
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="/isla_logo.png" alt="logo-sm-light" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="/isla_logo.png" alt="logo-light" height={50} />
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>
                        
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="/isla_logo.png"
                                    alt="Header Avatar" />
                                <span className="d-none d-xl-inline-block ms-1">Julia</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                
                                <a className="dropdown-item" href="#"><i className="ri-user-line align-middle me-1"></i> Profile</a>
                                <a className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle me-1"></i> My Wallet</a>
                                <a className="dropdown-item d-block" href="#"><span className="badge bg-success float-end mt-1">11</span><i className="ri-settings-2-line align-middle me-1"></i> Settings</a>
                                <a className="dropdown-item" href="#"><i className="ri-lock-unlock-line align-middle me-1"></i> Lock screen</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-danger" href="#"><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                                <i className="ri-settings-2-line"></i>
                            </button>
                        </div>
            
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;