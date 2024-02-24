import FadeIn from '../../components/animate/FadeIn';
import ClassesCards from '../../components/classes/ClassesCards';
import ClassesHeader from '../../components/classes/ClassesHeader';
import PageTitle from '../../components/page-title/PageTitle';

export default function CurriculumPage() {
  return (
    <>
      <PageTitle titleName="Curriculum" />
      <FadeIn numberDelay={300}>
        <ClassesHeader />
      </FadeIn>
      <FadeIn numberDelay={400}>
        <ClassesCards />
      </FadeIn>
    </>
  );
}
