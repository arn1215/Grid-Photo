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
                    <img src={images['./Sah.Vvy-164.jpg']} alt="" />
                </div>
                <div className="content8">
                    <img src={images['./matt.png']} alt="" />
                </div>
                <div className="content9">
                    <img src={images['./IMG_9790.png']} alt="" />
                </div>
                <div className="content10">
                    <img src={images['./Plants-mixed-layers.png']} alt="" />
                </div>
                <div class="content11">
                    <img src={images['./IMGP5181.jpg']} alt="" />
                </div>
                <div class="content12">
                    <img src={images['./IMGP5188.jpg']} alt="" />
                </div>
                <div class="content13">
                    <img src={images['./IMGP5182.jpg']} alt="" />
                </div>
                <div class="content14">
                    <img src={images['./IMG_8142.png']} alt="" />
                </div>
                <div class="content15">
                    <img src={images['./IMG_9854.jpg']} alt="" />
                </div>
                <div class="content16">
                    <img src={images['./Shloka.png']} alt="" />
                </div>
                <div class="content17">
                    <img src={images['./chlo.png']} alt="" />
                </div>
                <div class="content18">
                    <img src={images['./firedept.png']} alt="" />
                </div>
                <div class="content19">
                    <img src={images['./IMG_5485.jpg']} alt="" />
                </div>
                <div class="content20">
                    <img src={images['./DSC_3273.jpg']} alt="" />
                </div>
                <div class="content21">
                    <img src={images['./plantvcam.jpeg']} alt="" />
                </div>
                <div class="content22">
                    <img src={images['./IMG_5475.jpg']} alt="" />
                </div>
                <div class="content23">
                    <img src={images['./IMG_7748.jpg']} alt="" />
                </div>
                <div class="content24">
                    <img src={images['./IMG_7670-.jpg']} alt="" />
                </div>
                <div class="content25">
                    <img src={images['./IMG_7643.jpg']} alt="" />
                </div>
                <div class="content26">
                    <img src={images['./IMG_7757.jpg']} alt="" />
                </div>
                <footer>Ali Naqvi 2021</footer>
            </div>
        </>
    );
}

export default App;
