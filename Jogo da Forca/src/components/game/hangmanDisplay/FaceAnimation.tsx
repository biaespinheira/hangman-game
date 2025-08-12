import React, { useEffect } from 'react';
import './FaceAnimation.css';

interface FaceProps {
    wrongLetters: string[];
  }


const FaceAnimation: React.FC <FaceProps>= ({wrongLetters}) =>{
  useEffect(() => {
    const eyeball = (event: MouseEvent) => {
      const eyes = document.querySelectorAll<HTMLDivElement>('.eye');
      eyes.forEach((eye) => {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rot}deg)`;
      });
    };

    document.body.addEventListener('mousemove', eyeball);
    return () => {
      document.body.removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <div className='face'>
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
      <div className={wrongLetters.length>=5?"eyebrow-left": "hidden"}></div>
      <div className={wrongLetters.length>=5?"eyebrow-right": "hidden"}></div>
    </div>
  );
};

export default FaceAnimation;
