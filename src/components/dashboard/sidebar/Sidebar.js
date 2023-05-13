import React, { useEffect, useState } from 'react'
import './styles/Slidebar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function SlideBar({ children, }) {
    const pathname = useLocation();
    const [toggles, SetToggles] = useState(false);
    const [toggles1, SetToggles1] = useState(false);
    const tests = () => {
        SetToggles(!toggles);
        SetToggles1(!toggles1);
    }
    const [datas, SetDataGet] = useState([]);
    const history = useNavigate();
    const routes = [
        {
            name: "/portfolio/dashboard",
            names: "Dashboard",
            icons: <i class="fa-solid fa-house-user"></i>

        },
        {
            name: "/aboutme",
            names: "AboutMe",
            icons: <i class="fa-solid fa-address-card"></i>
        },
        {
            name: "/portfolio/skills",
            names: "Skills",
            icons: <i class="fa-solid fa-graduation-cap"></i>
        },
        {
            name: "/portfolio/projects",
            names: "Projects",
            icons: <i class="fa-solid fa-file-signature"></i>
        },
        {
            name: "/clients",
            names: "Clients",
            icons: <i class="fa-solid fa-users"></i>
        },
        {
            name: "/contact",
            names: "ContactUs",
            icons: <i class="fa-solid fa-phone-volume"></i>

        },
        {
            name: "/addsomething",
            names: "AddSomething",
            icons: <i class="fa-solid fa-user-plus"></i>
        }

    ]
    const profiles = () => {
        history("/portfolio/profile");
    }
    const LogoutUser = () => {
        localStorage.removeItem("accesstoken");
        setTimeout(() => {
            history("/");
        }, 1000);
        toast.success("Logout User Successfully...");
    }
    return (
        <motion.div  className='main-slidebar'>
            <motion.div className='inside-slide'>
                <motion.div className='bottom-slide'>
                    <motion.div className='slides d-none d-lg-block'>
                        <motion.div animate={{ width: toggles ? "200px" : "45px" }} className="slidebar">
                            <motion.div className='bars'>
                                {toggles && <motion.div onClick={() => history("/profile")}>
                                    Kalai
                                    {/* <span className='kalai' style={{ cursor: "pointer" }}><img src={kalaiimage} className="kalai-image" /></span> */}
                                </motion.div>}
                                <span onClick={tests}><i class="fa-solid fa-bars"></i></span>
                            </motion.div>
                            <div onClick={profiles} className="mb-3 profilesections">
                                {toggles?<>
                                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="no image"
                                    className="profileimage"
                                />
                                </>:<>
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="no image"
                                    className="profileimage1"
                                />
                                </>}
                               
                            </div>
                            {toggles && <motion.div className='followers'>
                                <motion.div className='first-follow'>
                                    <h4 className='count'>20</h4>
                                    <h5 className='flo'>Following</h5>
                                </motion.div>
                                <motion.div className='second-follow' style={{ cursor: "pointer" }}>
                                    <motion.div onClick={() => history("/followers")}>
                                        <h4 className='count'>{datas.length}</h4>
                                        <h5 className='flo'>Followers</h5>
                                    </motion.div>
                                </motion.div>
                            </motion.div>}
                            <section>
                                <motion.div className='flexs'>
                                    {routes.map((items) => (
                                        <motion.div className='navs'>

                                            <NavLink to={items.name} className="links" activeClassName={pathname?.pathname ? 'active' : "active"}>

                                                <div>{items.icons}</div>

                                                <AnimatePresence>
                                                    {toggles && <motion.div>
                                                        {items.names}
                                                    </motion.div>}
                                                </AnimatePresence>
                                            </NavLink>


                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div>
                                    <motion.div className='mt-4 d-flex'>
                                        <div className='d-flex gap-3 align-items-center' onClick={LogoutUser} >
                                            <i class="fa-solid fa-right-from-bracket"></i>
                                            <div onClick={LogoutUser} style={{
                                                cursor: "pointer"
                                            }}>
                                                {toggles ? <span className='text-danger fs-5 fw-500'>Logout</span> : ""}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </section>
                        </motion.div>
                    </motion.div>


                    <motion.div className='childes d-none d-lg-block ' animate={{ width: toggles1 ? "100%" : "100%" }}>
                        <motion.main>
                            {children}
                        </motion.main>
                    </motion.div>
                    <motion.div className='d-block d-lg-none'>
                        <motion.div className='d-block d-lg-block '>

                            <motion.div className='main-sidebar-nav'>
                                <motion.div className='mobile-inside-section'>
                                    <motion.div className='sidebar-mobile'>
                                        <motion.main>
                                            {children}
                                        </motion.main>
                                    </motion.div>

                                    <motion.div className='side-bottom-section'>
                                        <motion.nav class="mobile-bottom-nav">
                                            <motion.div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
                                                <motion.div class="mobile-bottom-nav__item-content" onClick={() => history.push("/")}>
                                                    <i class="fa-solid fa-house-heart"></i>
                                                    Home

                                                </motion.div>
                                            </motion.div>
                                            <div class="mobile-bottom-nav__item">
                                                <div class="mobile-bottom-nav__item-content" onClick={() => history.push("/skills")}>
                                                    <i class="fa-solid fa-book-open-cover"></i>
                                                    Skill

                                                </div>
                                            </div>
                                            <motion.div class="mobile-bottom-nav__item">
                                                <motion.div class="mobile-bottom-nav__item-content" onClick={() => history.push("/addsomething")}>
                                                    <i class="fa-solid fa-user-plus"></i>
                                                    Adduser

                                                </motion.div>
                                            </motion.div>

                                            <motion.div class="mobile-bottom-nav__item" onClick={() => history.push("/projects")}>
                                                <motion.div class="mobile-bottom-nav__item-content">
                                                    <i class="fa-solid fa-book-bookmark"></i>
                                                    Projects
                                                </motion.div>
                                            </motion.div>



                                        </motion.nav>

                                    </motion.div>
                                </motion.div>
                            </motion.div>


                        </motion.div>

                    </motion.div>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default SlideBar