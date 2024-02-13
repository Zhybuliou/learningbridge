import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';
import videoBg from '../../assets/videoBg.mp4';
import LogoCloud from '../../assets/LOGO-big.png';
import './startPage.css';
import AnimateWord from './AnimateWord';

export default function StartPage() {
  const styles = useSpring({
    from: {
      opacity: 0,
      y: '50%',
    },
    to: {
      opacity: 1,
      y: '0%',
    },
    config: {
      duration: 500,
    },
    delay: 700,
  });
  const styleLogo = useSpring({
    from: {
      opacity: 0,
      x: '50%',
    },
    to: {
      opacity: 1,
      x: '0%',
    },
    config: {
      duration: 500,
    },
    delay: 200,
  });

  return (
    <div className="start-page-main">
      <video src={videoBg} autoPlay loop muted />
      <div className="start-page-content">
        <animated.div style={styleLogo}>
          <img src={LogoCloud} alt="Cloud Logo" width="280px" height="100%" />
        </animated.div>
        <animated.div style={styles} className="start-page-link-block">
          <Link to="/freehold">
            <div className="start-page-link shadows-into">
              <AnimateWord word="Freehold Location" />
            </div>
          </Link>
          <Link to="/freehold">
            <div className="start-page-link shadows-into">
              <div style={{ width: '100%' }}>
                <div className="big-word">
                  <AnimateWord word="East Brunswick" />
                </div>
                <div className="big-word">
                  <AnimateWord word="Location" />
                </div>
              </div>
            </div>
          </Link>
        </animated.div>
      </div>
    </div>
  );
}
