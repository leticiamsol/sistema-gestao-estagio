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
                                    <img src="assets/images/logo-sm.png" alt="logo-sm" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="logo-dark" height={20} />
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.png" alt="logo-sm-light" height={22} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="logo-light" height={20} />
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                            <i className="ri-menu-2-line align-middle"></i>
                        </button>

                        
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-search-line"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
                    
                                <form className="p-3">
                                    <div className="mb-3 m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                                <i className="ri-fullscreen-line"></i>
                            </button>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="ri-notification-3-line"></i>
                                <span className="noti-dot"></span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{ maxHeight: '230px' }}>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="ri-shopping-cart-line"></i>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-1">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="avatar-xs me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="ri-checkbox-circle-line"></i>
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h6 className="mb-1">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <img src="assets/images/users/avatar-4.jpg" 
                                                className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="flex-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top">
                                    <div className="d-grid">
                                        <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                            <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block user-dropdown">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
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