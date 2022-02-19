import React from "react";
import { FaArrowLeft, FaDiscord, FaDog, FaLink, FaWallet } from "react-icons/fa";
import styles from '../styles/Home.module.css'

function RightNavContent() {
    return (
        <div className={styles.Container}>
            <div className={styles.ContainerSubContainer}>
                <div className={styles.border}>
                    <label><FaDog /></label>
                    <select>
                        <option value="/">Avalanche</option>
                    </select>
                </div>
                <div className={styles.border}>
                    <label><FaWallet /></label>
                    <select>
                        <option value="/">0FX6.1353</option>
                    </select>
                </div>
            </div>
            <div className={styles.lastContent}>
                <p><FaArrowLeft /> &nbsp;Custom Link</p>
                <p style={{fontSize:"13px"}}>http://localhost:3000/</p>
                <input type="text" placeholder="Enter" />
                <div className={styles.lastLinks}>
                    <li><FaLink /> &nbsp;<a href="/">Custom link</a></li>
                    <li><FaDiscord />  &nbsp;<a href="/">Cancel</a></li>
                </div>
            </div>
            
        </div>
    )
}
export default RightNavContent;