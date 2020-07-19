import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight, FiChevronUp, FiCalendar, FiClock } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import './styles.css';

import videos from '../../utils/videosData';

function Content() {
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState('mobile nav');
  const [rotate, setRotate] = useState('arrow')

  const history = useHistory();

  const videoCount = videos.length;
  
  useEffect(() => {
    const key = localStorage.getItem('authorization');
    if (key !== 'autorizado') {
      history.push('/')
    }

    if (counter < 1) {
      setCounter(1)
    } else if (counter > videoCount) {
      setCounter(videoCount)
    }
  }, [counter, history])

  let Video;

  Video = videos[counter - 1].component;

  const handleOpen = () => {
    if (open == 'mobile nav') {
      setOpen('mobile nav open')
      setRotate('arrow rotate')
    } else {
      setOpen('mobile nav')
      setRotate('arrow')
    }
  }

//TODO: transformar essas váriaveis nos seus próprios componentes

  let backMobile =  <button className='mobile button inactive'>
                      <FiArrowLeft/>
                    </button>;
  let backPc =  <button className='pc button inactive'>
                  <FiArrowLeft/>
                </button>;
  let foward =  <button className='foward button inactive'>
                  <FiArrowRight/>
                </button>;
  
  if(counter > 1) {
    backMobile =  <button className='mobile button' onClick={() => setCounter(counter - 1)}>
                    <FiArrowLeft/>
                  </button>
    backPc =  <button className='pc button' onClick={() => setCounter(counter - 1)}>
                <FiArrowLeft/>
              </button>                                                                                  
  } 
  
  if (counter < videoCount) {
    foward = <button className='foward button' onClick={() => setCounter(counter + 1)}>
                <FiArrowRight/>
              </button>
  }

  let list = 
    <ul>
      {videos.map((video, index) => (
        <li key={index} onClick={() => setCounter(index + 1)}>
          <h1>{video.title}</h1>
          <span><FiCalendar/> {video.date} &nbsp; &nbsp; <FiClock/> {video.duration}</span>
        </li>
      ))}
    </ul>

  return(
    <div className='Content'>
      <div className='page'>
        <div className='aside'>
          {list}
        </div>
        {backPc}
        {Video}
        <div className='flex'>
          {backMobile}
          {foward}
        </div>
      </div>
      <div id='nav' className={open}>
        <FiChevronUp className={rotate} onClick={handleOpen}/>
        {list}
      </div>
    </div>
  )
}

export default Content;