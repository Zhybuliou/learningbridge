import './page-title.css';

export default function PageTitle({ titleName }: { titleName: string }) {
  return (
    <div className="title-wrapper">
      <h2>{titleName}</h2>
    </div>
  );
}
