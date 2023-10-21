import {Link} from 'react-router-dom';

function Sidebar()
{
    return (
        <div>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">

                    <div id="sidebar-menu">
                        
                        <ul className="metismenu list-unstyled" id="side-menu">

                            <li><Link to="/">Home</Link></li>

                            <li>
                                <a href="index.html" className="waves-effect">
                                    <i className="ri-dashboard-line"></i><span className="badge rounded-pill bg-success float-end">3</span>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                            <li>
                                <a href="calendar.html" className=" waves-effect">
                                    <i className="ri-calendar-2-line"></i>
                                    <span>Calendar</span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);" className="has-arrow waves-effect">
                                    <i className="ri-mail-send-line"></i>
                                    <span>Email</span>
                                </a>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Read Email</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                   
                </div>
            </div>
         
        </div>
    )
}

export default Sidebar;