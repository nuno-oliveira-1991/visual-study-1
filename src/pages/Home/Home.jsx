import React from 'react';
import style from './home-styles.module.scss'
import MainPanel from '../../components/MainPanel/MainPanel';

const Home = () => {

  return (
    <div className={style['container']}>
      <MainPanel />
    </div>
  )
};

export default Home;