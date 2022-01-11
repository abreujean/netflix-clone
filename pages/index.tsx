import type { NextPage } from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero';
import WhatchOnTv from '../components/WatchOnTv';


const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhatchOnTv />
    </>
  )
}

export default Home;
