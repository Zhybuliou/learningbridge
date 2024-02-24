import FadeIn from '../animate/FadeIn';
import './page-title.css';

export default function PageTitle({ titleName }: { titleName: string }) {
  return (
    <div className="title-wrapper">
      <FadeIn numberDelay={300}>
        <h2>{titleName}</h2>
      </FadeIn>
    </div>
  );
}
