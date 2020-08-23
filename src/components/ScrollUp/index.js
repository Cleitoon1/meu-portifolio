import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './scrollUp.css';


const ScrollTopArrow = ({pageYOffset}) =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > pageYOffset){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= pageYOffset){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <FaArrowCircleUp size={32} className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollTopArrow;