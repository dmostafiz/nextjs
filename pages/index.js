import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br/> <a href="https://dcodea.com">Dcodea Software Technologies!</a>
        </h1>

        <p className={styles.description}>
          Dcodea is a Software development Company. The site is under construction. Please visit later.
        </p>

        
      </main>


    </div>
  )
}
