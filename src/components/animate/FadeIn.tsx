import { useState } from 'react';

import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from '@react-spring/web';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  numberDelay: number;
};

function FadeIn({ children, numberDelay }: Props) {
  const [inView, setInview] = useState(false);

  const transition = useSpring({
    delay: numberDelay,
    to: {
      y: !inView ? 24 : 0,
      opacity: !inView ? 0 : 1,
    },
  });
  return (
    <Waypoint onEnter={() => setInview(true)}>
      <animated.div style={transition}>{children}</animated.div>
    </Waypoint>
  );
}

export default FadeIn;
