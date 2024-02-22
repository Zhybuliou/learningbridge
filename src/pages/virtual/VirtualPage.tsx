import PageTitle from '../../components/page-title/PageTitle';
import './virtual.css';
import BoyBook from '../../assets/kid-who.png';

export default function VirtualPage() {
  return (
    <>
      <PageTitle titleName="Virtual Learning" />
      <div className="virtual-header">
        <p>Learning Bridge Academy</p>
        <h3>Our Virtual Learning</h3>
      </div>
      <div className="virtual-content">
        <div className="virtual-content-image">
          <img src={BoyBook} alt="boy" width="auto" height="300px" />
        </div>
        <div className="virtual-content-info">
          <div className="who-content-card">
            <div className="who-content-content">
              <h5>Dedicated Classroom</h5>
              <p>
                Learning Bridge Academy has a dedicated classroom for Virtual
                Learners with a specialist who works with each student.
              </p>
            </div>
          </div>
          <div className="who-content-card">
            <div className="who-content-content">
              <h5>Access Capabilities</h5>
              <p>
                Our class has remote access capabilities for parents to monitor
                their child.
              </p>
            </div>
          </div>
          <div className="who-content-card">
            <div className="who-content-content">
              <h5>Social Distancing</h5>
              <p>
                The classroom makes sure to follow the proper safety and social
                distancing guidelines.
              </p>
            </div>
          </div>
          <div className="who-content-card">
            <div className="who-content-content">
              <h5>Snacks</h5>
              <p>We also provide meals and snacks on site.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
