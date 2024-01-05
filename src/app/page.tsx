import styles from '../styles/Home.module.css' // CSSファイルをインポート

export default function Home() {
  return (
    <>
      <div className={styles.top}> 
        <h1 className={styles.top_msg}>bluecode, Lifestyle developer.</h1> 
      </div>
      <main>
        <section className={styles.content}> 
          <h2>websiteの最新情報</h2>
          <p>最新の情報をご案内します。</p>
        </section>
      </main>
    </>  
  )
}