import { animated, useSprings } from '@react-spring/web';

export default function AnimateWord({ word }: { word: string }) {
  const text = [...word];
  const base = {
    from: {
      opacity: 0,
      y: '-50px',
    },
    to: {
      opacity: 1,
      y: '0px',
    },
  };
  const styleWord = useSprings(
    text.length,
    text.map((t, i) => ({ ...base, delay: 800 + 100 * i }))
  );
  return (
    <>
      {styleWord.map((s, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <animated.span key={`char${i}`} style={s}>
            {word[i] === ' ' ? <>&nbsp;</> : word[i]}
          </animated.span>
        );
      })}
    </>
  );
}
