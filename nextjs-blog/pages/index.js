import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section clasName={utilStyles.headingMd}>
        <p>Self-taught full stack developer and enthusiatic for solving problems</p>
        <p>
          (Sample website - learning how to use nextjs follow this {' '}
          <a href="https://next.js.org/learn">tutorial</a>!)
        </p>
      </section>
    </Layout>
  )
}
