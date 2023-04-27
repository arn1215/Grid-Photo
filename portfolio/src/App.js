import logo from './logo.svg';
import './App.css';
import './index.css'
import image1 from './Resources/Images/colorarch1(2) INSTA.png'


const App = () => {
  return (
      <>
          <div className="container">
              <nav>
                  <div className="logo">
                      Ali Naqvi
                      <div className="occupation">
                          Photographer
                      </div>
                  </div>
                  <div className="navlinks">
                      <a href="" className="projects">Projects</a>
                      <a href="" className="about">About</a>
                      <a href="" className="contact">Contact</a>
                  </div>
              </nav>
              <div className="sidebar"></div>
              <div className="sidebar2"></div>

              <div className="content1">
                  <img src="./Resources/Images/colorarch1(2) INSTA.png" alt="" />
              </div>
              <div className="content2">
                  <img src="./Resources/Images/ColorArch4Instagram.png" alt="" />
              </div>
              <div className="content3">
                  <img src="./Resources/Images/ColorArch2instagram1.png" alt="" />
              </div>
              <div className="content4">
                  <img src="./Resources/Images/Sah.Vvy-121.jpg" alt="" />
              </div>
              <div className="content5">
                  <img src="./Resources/Images/Sah.Vvy-118.jpg" alt="" />
              </div>
              <div className="content6">
                  <img src="./Resources/Images/Sah.Vvy-122.jpg" alt="" />
              </div>
              <div className="content7">
                  <img src="./Resources/Images/colorarch1(2) INSTA.png" alt="" />
              </div>
              <div className="content8">
                  <img src="Resources/Images/ColorArch6.png" alt="" />
              </div>
              <div className="content9">
                  <img src="Resources/Images/ColorArch8.png" alt="" />
              </div>
              <footer>Ali Naqvi 2021</footer>
          </div>
      </>
  );
}

export default App;
