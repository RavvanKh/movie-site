import Link from 'next/link'
import React from 'react'
import {FaPlayCircle} from "react-icons/fa"
import styles from "./styles.module.css"
const Header = () => {
  return (
    <header className={`${styles.header} container fluid` }>
        <div className={styles.headerWrapper}>
            <Link href='https://next-movie-site.vercel.app/' className={styles.logo}>
                <FaPlayCircle/>
                NETFILMS
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href='https://next-movie-site.vercel.app/'>Movies</Link>
                <Link href='https://next-movie-site.vercel.app/'>Series</Link>
                <Link href='https://next-movie-site.vercel.app/'>Kids</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
