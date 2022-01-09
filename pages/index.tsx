import React, { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import {motion, useViewportScroll, useTransform} from 'framer-motion';

import Layout from '../components/Layout';
import Card from '../components/card/Card';

const Home: NextPage = () => (
  <Layout>
    <div className='h-screen'></div>
    {/* Projects */}
    <Project />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F90716" fillOpacity={1} d="M0,224L60,224C120,224,240,224,360,229.3C480,235,600,245,720,229.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  </Layout>
);
  
const Project = () => {
  const {scrollYProgress: scrollProgress} = useViewportScroll();
  return (
  <div className="project" id='project'>
    <motion.div
      className="card"
      style={{ 
        opacity: useTransform(scrollProgress, [0, 0.4], [0, 1])
      }} >
      <div className="text-4xl font-bold text-center">Projects</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 place-items-center py-5">
        <Card title="Project 1">This is card</Card>
        <Card title="Project 2">This is card</Card>
        <Card title="Project 3">This is card</Card>
        <Card title="Project 4">This is card</Card>
        <Card title="Project 4">This is card</Card>
        <Card title="Project 4">This is card</Card>
        <Card title="Project 4">This is card</Card>
        <Card title="Project 4">This is card</Card>
        <Card title="Project 4">This is card</Card>
      </div>
    </motion.div>
  </div>
  );
}

export default Home
