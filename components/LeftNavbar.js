import React from "react";
import { FaHome, FaUser, FaPagelines, FaArrowLeft, FaGlobe, FaPaperclip, FaQuoteRight, FaSearch, FaDollarSign, FaDownload, FaLockOpen, FaSchool, FaSadCry, FaScrewdriver, FaMoon } from 'react-icons/fa';
import styles from '../styles/Home.module.css'
import { fun, isChecked } from "./functions";
import {data} from './data.json'

function LeftNavbar() {
    return (

        <div className={styles.navcontainer}>
            <div className={styles.logo}>
                <div style={{ display: "flex" }}>
                    <div className={styles.boxlogo}>N</div>
                    <h2>Name</h2>
                </div>
                <div>

                    <FaArrowLeft className={styles.FaArrowLeft} />
                </div>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FaHome />
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <FaScrewdriver />

                        <a href="#">Section 1</a></li>
                    <li>
                        <FaSchool />
                        <a href="#">Section 2</a>

                    </li>
                    <li> <FaPagelines /><a href="#">Section 3</a></li>
                    <li> <FaLockOpen /><a href="#">Section 4</a></li>
                    <li> <FaDownload /><a href="#">Section 5</a></li>
                    <li> <FaDollarSign /><a href="#">Section 6</a></li>
                    <li> <FaSearch /><a href="#">Section 7</a></li>
                    <li> <FaQuoteRight /><a href="#">Section 8</a></li>
                    <li> <FaPaperclip /><a href="#">Documentation</a></li>
                </ul>

            </div>
            <div className={styles.bottomContentLeft}>
                <div className={styles.bottomContentLeftspan}>
                    <span><span className={styles.Nspan}>N</span> $0.90</span>
                </div>
                <div className={styles.bottomContentLeftspan}>
                    <span>Buy $XYZ</span>
                </div>
            </div>
            <section style={{ display: "flex", alignItems: "center", justifyContent: "start", margin: "5px" }}>
                <div style={{ margin: "5px" }}>
                    <FaGlobe style={{ color: "lightblue" ,cursor:"pointer"}} />

                </div>
                <div style={{ margin: "5px"}}>
                    <label className={styles.switch}>
                        <input type="checkbox" id={"look"} onClick={isChecked} />
                        <span className={styles.slider}></span>
                    </label>

                </div>
            </section>

        </div>

    )
}
export default LeftNavbar;