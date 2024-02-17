import './whoWeAre.css';
// import BoyWho from '../../assets/kid-who.png';
import BoyWho from '../../assets/kid-8.png';
import ImageTrophy from '../../assets/trophy.png';
import ImageBoard from '../../assets/abc.png';
import ImageBooks from '../../assets/books.png';
import Imagecertificate from '../../assets/certificate.png';

export default function WhoWeAre() {
  return (
    <section>
      <div className="who">
        <div className="who-header">
          <p>Who we are</p>
          <h3>The best school for your kid</h3>
        </div>
        <div className="who-content">
          <div className="who-content-image">
            <img src={BoyWho} alt="boy" width="auto" height="300px" />
          </div>
          <div className="who-content-info">
            <div className="who-content-card">
              <img src={ImageTrophy} alt="trophy" width="auto" height="100px" />
              <div className="who-content-content">
                <h5>Enriched Interaction</h5>
                <p>
                  Your child will always have something to do! Our curriculum
                  makes sure to keep everyone busy.
                </p>
              </div>
            </div>
            <div className="who-content-card">
              <img src={ImageBoard} alt="trophy" width="auto" height="100px" />
              <div className="who-content-content">
                <h5>Following Curriculum</h5>
                <p>Our school follows the Common Core Guidelines</p>
              </div>
            </div>
            <div className="who-content-card">
              <img src={ImageBooks} alt="trophy" width="auto" height="100px" />
              <div className="who-content-content">
                <h5>Multiple Grades</h5>
                <p>
                  With a balance of self-directed play and thoughtful teacher.
                  We teach from Preschool to First Grade!
                </p>
              </div>
            </div>
            <div className="who-content-card">
              <img
                src={Imagecertificate}
                alt="trophy"
                width="auto"
                height="100px"
              />
              <div className="who-content-content">
                <h5>Extra Activities</h5>
                <p>
                  Learning Bridge Academy offers a variety of extra-curricular
                  activities beginning with Preschool-aged children and on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
