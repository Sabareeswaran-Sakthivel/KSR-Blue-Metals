import React from 'react'
import Link from 'next/link'
import styles from '../styles/HOC/Layout.module.css'
import Head from 'next/head'

function Layout({children}) {
  return (
    <>
    <Head>
       <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </Head>
     <nav className={styles.nav}>
          <h1>KSR Blue Metals</h1>
          <div className={styles.links}>
            
            <Link href="/">Home</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <main>{children}</main>

        <footer className={styles.footer}>
            © {new Date().getFullYear() - 1} -  {new Date().getFullYear()}   All Rights Reserved
        </footer>
    </>
  )
}

export default Layout