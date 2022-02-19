import Head from 'next/head'
import ImageNext from 'next/image'
import styles from '../styles/Home.module.css'
import LeftNavbar from '../components/LeftNavbar'
import Header from '../components/header'
import RightNavContent from '../components/rightNavContent'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="gaurav pathak" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Comforter&family=Heebo:wght@200;300&family=Mochiy+Pop+P+One&family=Roboto+Serif:wght@100&family=Roboto:wght@100&family=Shippori+Antique+B1&display=swap" rel="stylesheet"></link>
        <p style={{ background: "blue", color: "white", textAlign: "center", fontSize: "12px", padding: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit.cilis minus!x  </p>
      </Head>
      < LeftNavbar />
      <Header />
      <RightNavContent />
    </div>
  )
}
