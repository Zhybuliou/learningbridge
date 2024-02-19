import ClassesCards from '../../components/classes/ClassesCards';
import ClassesHeader from '../../components/classes/ClassesHeader';
import PageTitle from '../../components/page-title/PageTitle';

export default function CurriculumPage() {
  return (
    <>
      <PageTitle titleName="Curriculum" />
      <ClassesHeader />
      <ClassesCards />
    </>
  );
}
