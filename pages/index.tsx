import type { NextPage } from 'next'
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="font-bold text-center text-3xl">
        Hello World!
      </div>
    </Layout>
  );
}

export default Home
