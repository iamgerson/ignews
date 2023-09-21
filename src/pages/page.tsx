import { GetServerSideProps } from 'next'
import Head from "next/head";
import Image from "next/image";

import styles from './home.module.scss'
import { Header } from "../components/Header";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product } : HomeProps) {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>

      <Header/>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏾 Hey, Welcome</span>
          <h1>News about the <span>React</span> World.</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>

        <Image priority src="/imagens/avatar.svg" height={500} width={500} alt="coding"/>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1Nms9NDFtTJTOPvdGsUFjsgN', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props :{
      product,
    }
  }
}
