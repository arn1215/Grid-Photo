import { useState } from 'react';
import { ImagePreloader } from 'react-preload-images';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <ImagePreloader
      images={[
        './Resources/Images/colorarch1(2) INSTA-min.png',
        './Resources/Images/ColorArch4Instagram-min.png',
        './Resources/Images/ColorArch2instagram1-min.png',
        './Resources/Images/Sah.Vvy-121-min.jpg',
        './Resources/Images/Sah.Vvy-118-min.jpg',
        './Resources/Images/Sah.Vvy-122-min.jpg',
        './Resources/Images/colorarch1(2) INSTA-min.png',
        './Resources/Images/ColorArch6-min.png',
        './Resources/Images/ColorArch8-min.png',
      ]}
      onComplete={() => setLoading(false)}
    >
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <nav>
            <div className="logo">
              Ali Naqvi
              <div className="occupation">Photographer</div>
            </div>
            <div className="navlinks">
              <a href="" className="projects">
                Projects
              </a>
              <a href="" className="about">
                About
              </a>
              <a href="" className="contact">
                Contact
              </a>
            </div>
          </nav>
          <div className="sidebar"></div>
          <div className="sidebar2"></div>

          <div className="content1">
            <img src="./Resources/Images/colorarch1(2) INSTA-min.png" alt="" />
          </div>
          <div className="content2">
            <img src="./Resources/Images/ColorArch4Instagram-min.png" alt="" />
          </div>
          <div className="content3">
            <img src="./Resources/Images/ColorArch2instagram1-min.png" alt="" />
          </div>
          <div className="content4">
            <img src="./Resources/Images/Sah.Vvy-121-min.jpg" alt="" />
          </div>
          <div className="content5">
            <img src="./Resources/Images/Sah.Vvy-118-min.jpg" alt="" />
          </div>
          <div className="content6">
            <img src="./Resources/Images/Sah.Vvy-122-min.jpg" alt="" />
          </div>
          <div className="content7">
            <img src="./Resources/Images/colorarch1(2) INSTA-min.png" alt="" />
          </div>
          <div className="content8">
            <img src="Resources/Images/ColorArch6-min.png" alt="" />
          </div>
          <div className="content9">
            <img src="Resources/Images/ColorArch8-min.png" alt="" />
          </div>
          <footer>Ali Naqvi 2021</footer>
        </div>
      )}
    </ImagePreloader>
  );
};

export default App;