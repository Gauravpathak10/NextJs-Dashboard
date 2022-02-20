import React from "react";
import { FaBitcoin, FaCopy, FaLink, FaUser, FaWallet } from "react-icons/fa";
import styles from '../styles/Home.module.css'
import ImageNext from 'next/image'
import Imageone from "../public/source/badge.png"
import { clicked, seened } from "./functions"
import data from './data.json'

function Header() {



    return (


        <div className={styles.mainContent}>
            <div className={styles.FirstSection}>
                <h5> Section</h5>
                <div className={styles.headertopcontent}>
                    <li style={{ marginTop: "5px" }}><FaWallet /></li>
                    <li style={{ fontSize: "13px" }}>0.2$XYZ</li>
                    <li style={{ background: "lightblue", padding: "4px", fontSize: "10px", borderRadius: "5px", cursor: "pointer" }}>Tier 1</li>
                </div>
            </div>
            {/* Second section  */}
            <div className={styles.SecondSectionContainer} id={"demo"}>
                <div>
                    <p>Lorem ipsum doloero, placeat, eligendi harum deleniti sint iure laboriosam delectus ea?</p>
                    <button className={styles.btnOne}>Tutorial</button>
                </div>
                <ImageNext
                    src={Imageone}
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
                <span className={styles.spanContainer} onClick={clicked}>
                    x
                </span>

            </div>
            {/* Third Section  */}
            <div className={styles.ThirdSection}>
                <div>
                    <h3>Your rewards</h3>
                    <h2>$0.26231428</h2>
                    <div style={{ display: "flex" }}>
                        <span>$40 AVAX</span>
                        <span>$10 BNB</span>
                        <span>$210 BTC</span>
                    </div>
                </div>
                <div className={styles.CustomLink}>
                    <li><FaLink /> &nbsp;<a href="/">Custom link</a></li>
                </div>
            </div>
            {/* Fourth Section  */}
            <section className={styles.FourthSectionContainer}>
                <div className={styles.SubContainer}>
                    <div style={{ display: "flex", alignItems: "center" }}><span ><FaUser className={styles.FourthSectionFirstIcon} /></span>12% of fees</div>
                    <p>Your referal link of XYZ</p>
                    <div className={styles.SubLink}> http://localhost:3000/ <FaCopy /></div>
                </div>
                <div className={styles.SubContainer}>
                    <div style={{ display: "flex", alignItems: "center" }}><span><FaUser className={styles.FourthSectionFirstIcon} /></span>12% of fees</div>
                    <p>Your referal link of XYZ</p>
                    <div className={styles.SubLink}> http://localhost:3000/ <FaCopy /></div>
                </div>
            </section>
            {/* Fifth Section  */}
            <section className={styles.section}>
                <button id="btnOne" onClick={seened} style={{ marginLeft: "8px" }}>First Tap</button>
                <button id="btnTwo" onClick={seened}>Second Tap</button>

                <div id="one" style={{ width: "100%", }}>
                    <table className={styles.tableOne}>
                        <tr>
                            <th>Asset</th>
                            <th>Amount</th>
                            <th>User Account </th>
                            <th>Referalls</th>
                        </tr>
                    </table>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td> <img src={data.data[0].img} alt="img" style={{ width: "20px" }} /> BitCoin </td>
                                <td>0.000BNB</td>
                                <td>0X7779797</td>
                                <td>0.00000BNB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="Two" style={{ width: "100%", display: "none" }}>
                    <table className={styles.tableOne}>
                        <tr>
                            <th>Asset</th>
                            <th>Amount</th>
                            <th>User Account </th>
                            <th>Referalls</th>
                        </tr>
                    </table>
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td style={{display:"flex"}}>
                                    <img src={data.data[0].img} alt="img" style={{ width: "20px" }} />
                                    {data.data[0].asset}
                                    
                                    <li style={{ fontSize: "12px" }}>
                                        {data.data[0].type}
                                        <img src={data.data[0].chain.img} alt="avax" />
                                    </li>
                                </td>
                                <td>0.000BNB
                                    <li>{data.data[0].state}</li>
                                </td>
                                <td>{data.data[0].user}</td>
                                <td>{data.data[0].referral_earnings}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* <FaBitcoin style={{ color: "greenyellow", fontSize: "17px" }} />  */}
            </section>
        </div>
    )
}
export default Header;