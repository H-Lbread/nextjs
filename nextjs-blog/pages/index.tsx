import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[这是一些文字]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="/posts/first-post">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
