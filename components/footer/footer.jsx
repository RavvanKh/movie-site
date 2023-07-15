import React from 'react'

import styles from "./styles.module.css"
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="/">
        Ravan Khaligov
      </Link>
    </footer>
  )
}

export default Footer