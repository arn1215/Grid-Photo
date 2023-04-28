import logo from './logo.svg';
import './App.css';
import './index.css'
const images = {};

function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('./Resources/Images/', false, /\.(png|jpe?g|svg)$/));



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
                    <img src={images['./colorarch1(2) INSTA-min.png']} alt="" />
                </div>
                <div className="content2">
                    <img src={images['./ColorArch4Instagram-min.png']} alt="" />
                </div>
                <div className="content3">
                    <img src={images['./ColorArch2instagram1-min.png']} alt="" />
                </div>
                <div className="content4">
                    <img src={images['./Sah.Vvy-121-min.jpg']} alt="" />
                </div>
                <div className="content5">
                    <img src={images['./Sah.Vvy-118-min.jpg']} alt="" />
                </div>
                <div className="content6">
                    <img src={images['./Sah.Vvy-122-min.jpg']} alt="" />
                </div>
                <div className="content7">
                    <img src={images['./colorarch1(2) INSTA-min.png']} alt="" />
                </div>
                <div className="content8">
                    <img src={images['./ColorArch6-min.png']} alt="" />
                </div>
                <div className="content9">
                    <img src={images['./ColorArch8-min.png']} alt="" />
                </div>
                <div className="content10">
                    <img src={images['./Plants-mixed-layers.png']} alt="" />
                </div>
                <footer>Ali Naqvi 2021</footer>
            </div>
        </>
    );
}

export default App;
