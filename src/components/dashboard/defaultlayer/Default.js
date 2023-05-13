import { useEffect, memo, Fragment, useContext, useState } from 'react'
import { Navigate, Outlet, useLocation, useOutlet, useOutletContext } from 'react-router-dom'

//react-shepherd
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd'
import SlideBar from '../sidebar/Sidebar';


import './styles/Default.scss';



const Tour = () => {
    const tour = useContext(ShepherdTourContext);
    const { pathname } = useLocation()
    useEffect(() => {
        if (pathname === '/dashboard' && sessionStorage.getItem('tour') !== 'true') {
            tour?.start();
        }
    });
    return (
        <Fragment>
        </Fragment>
    );
};

const Default = memo((props) => {
    const outlet = useOutlet()
    let location = useLocation();



    const closeTour = () => {
        sessionStorage.setItem('tour', 'true')
    }



    // shepherd
    const newSteps = [
        {
            title: "<h4>Menu</h4>",
            text: '<p className="mb-0">Check the content under Menu Style. Click to view all oavailable Menu Style options for you.</p>',
            attachTo: { element: ".sidebar ", on: "right" },
            buttons: [
                {
                    type: "next",
                    text: "Next"
                }
            ],
            when: {
                show: () => {
                    document.querySelector('.shepherd-modal-overlay-container').classList.add('shepherd-modal-is-visible')
                },
                cancel: () => closeTour()
            }
        },
        {
            title: "<h4>Profile Setting</h4>",
            text: '<p className="mb-0">Configure your Profile using Profile Settings. Edit, save and update your profile from here.</p>',
            attachTo: { element: ".iq-tour ", on: "bottom" },
            buttons: [
                {
                    type: "back",
                    classes: "shepherd-button-secondary",
                    text: "Back"
                },
                {
                    type: "next",
                    text: "Next"
                }
            ],
            when: {
                cancel: () => closeTour()
            }
        },
        {
            title: "<h4>Live Customizer</h4>",
            text: '<p className="mb-0">Transform the entire look, color, style and appearance of using Live Customizer settings. Change and copy the settings from here.</p>',
            attachTo: { element: ".btn-setting", on: "left" },
            buttons: [
                {
                    type: "back",
                    classes: "shepherd-button-secondary",
                    text: "Back"
                },
                {
                    action() {
                        sessionStorage.setItem('tour', 'true')
                        return this.next();
                    },
                    text: "Done"
                }
            ],
            when: {
                cancel: () => closeTour()
            }
        },
    ];
    const tourOptions = {
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            }
        },
        when: {
            cancel: function () {
            }
        }
    };
    var subHeader = '';
    var commanclass = '';
    switch (location.pathname) {
        case '/dashboard/special-pages/calender':
        case '/dashboard/special-pages/billing':
        case '/dashboard/special-pages/kanban':
        case '/dashboard/special-pages/pricing':
        case '/dashboard/special-pages/timeline':
        case '/dashboard/table/table-data':
        case '/dashboard/table/bootstrap-table':
        case '/dashboard/table/border-table':
        case '/dashboard/table/fancy-table':
        case '/dashboard/table/fixed-table':
            subHeader = "new"
            commanclass = 'iq-banner default'
            break;
        default:
            break
    }



    const token = localStorage.getItem("accesstoken");

    if (token) {
        return (
            <Fragment >
                <main className="maincontent">
                    <div className="">
                        <SlideBar />
                    </div>
                    <div className='mainsectionbars'>
                        <Outlet />
                    </div>
                </main>
            </Fragment>
        )
    } else if (token) {
        return (
            <Navigate to='/'></Navigate>
        )
    }

}
)


export default Default


