import Head from 'next/head'
import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles  from '../styles/pages/Home.module.css';

function App() {
  return (
      <div className={styles.container}>
        <Head>
          <title>Move It</title>
        </Head>
        <ExperienceBar/>
          <section>
            <div className="">
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div className="">

            </div>
          </section>
      </div>
  );
}

export default App;
