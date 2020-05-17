import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight, FiChevronUp, FiCalendar, FiClock } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';
import './styles.css';

function Content() {
  const [counter, setCounter] = useState(1);
  const [open, setOpen] = useState('mobile nav');
  const [rotate, setRotate] = useState('arrow')

  const history = useHistory();
  
  useEffect(() => {
    const key = localStorage.getItem('authorization');
    if (key !== 'autorizado') {
      history.push('/')
    }

    if (counter < 1) {
      setCounter(1)
    } else if (counter > 2) {
      setCounter(2)
    }
  }, [counter, history])

  let Video;

  switch (counter) {
    case 1:
      Video = <div className='videos'>
                <iframe title='video1' width="100%" height="100%" src="https://www.youtube.com/embed/wsJDIAdB_Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
      break;
    case 2:
      Video = <div className='videos'>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WmAGeEfccMo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
      break;
    case "renan":
      Video = <h1>RENAN BRAYNER DESENVOLVEDOR AMA BRUNNINHA</h1>
      break
    default:
      Video = <div className='videos'>
                <iframe title='default' width="100%" height="100%" src="https://www.youtube.com/embed/wsJDIAdB_Ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
      break;
  }

  const handleOpen = () => {
    if (open == 'mobile nav') {
      setOpen('mobile nav open')
      setRotate('arrow rotate')
    } else {
      setOpen('mobile nav')
      setRotate('arrow')
    }
  }

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
  
  if (counter < 2) {
    foward = <button className='foward button' onClick={() => setCounter(counter + 1)}>
                <FiArrowRight/>
              </button>
  }

  return(
    <div className='Content'>
      <div className='page'>
        <div className='aside'>
          <ul>
            <li onClick={() => setCounter(1)}>
              <h1>9 DICAS PARA JOGAR CASH GAMES</h1>
              <span><FiCalendar/> 12/05/20 &nbsp; &nbsp; <FiClock/> 00:20</span>
            </li>
            <li onClick={() => setCounter(2)}>
              <h1>PENSANDO EM RANGES</h1>
              <span><FiCalendar/> 12/05/20 &nbsp; &nbsp; <FiClock/> 00:20</span>
            </li>
          </ul>
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
        <ul>
          <li onClick={() => setCounter(1)}>
            <h1>9 DICAS PARA JOGAR CASH GAMES</h1>
            <span><FiCalendar/> 12/05/20 &nbsp; &nbsp; <FiClock/> 00:20</span>
          </li>
          <li onClick={() => setCounter(2)}>
            <h1>PENSANDO EM RANGES</h1>
            <span><FiCalendar/> 12/05/20 &nbsp; &nbsp; <FiClock/> 00:20</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Content;