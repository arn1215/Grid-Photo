import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import './index.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const images = {};

function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('./Resources/Images/', false, /\.(png|jpe?g|svg)$/));

const imageKeys = [
    './colorarch1(2) INSTA-min.png',
    './ColorArch4Instagram-min.png',
    './ColorArch2instagram1-min.png',
    './Sah.Vvy-121-min.jpg',
    './Sah.Vvy-118-min.jpg',
    './Sah.Vvy-122-min.jpg',
    './Sah.Vvy-164.jpg',
    './matt.png',
    './IMG_9790.png',

    './IMGP5181.jpg',
    './IMGP5188.jpg',
    './IMGP5182.jpg',
    './IMG_8142.png',
    './IMG_9854.jpg',
    './Shloka.png',
    './chlo.png',
    './firedept.png',
    './IMG_5485.jpg',
    './DSC_3273.jpg',
    './plantvcam.jpeg',
    './IMG_5475.jpg',
    './IMG_7748.jpg',
    './IMG_7670-.jpg',
    './IMG_7643.jpg',
    './IMG_7757.jpg',

    './Plants-mixed-layers.png',
];


Modal.setAppElement('#root');




const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#ffffff',
        borderRadius: '2px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'auto',
        maxHeight: '90vh',
        maxWidth: '90vw',
        animation: 'fadeIn .5s',

    },
    overlay: {
        backgroundColor: 'rgba(80, 80, 80, 0.15)', // dark transparent background
        animation: 'fadeIn .5s',
    },
};

const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    function openModal(imgKey) {
        setCurrentImage(imgKey);
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function nextImage() {
        const currentIndex = imageKeys.indexOf(currentImage);
        if (currentIndex < imageKeys.length - 1) {
            setCurrentImage(imageKeys[currentIndex + 1]);
        }
    }

    function prevImage() {
        const currentIndex = imageKeys.indexOf(currentImage);
        if (currentIndex > 0) {
            setCurrentImage(imageKeys[currentIndex - 1]);
        }
    }

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

                <div style={{ cursor: 'pointer' }} className="content1" onClick={() => openModal('./colorarch1(2) INSTA-min.png')}>
                    <img src={images['./colorarch1(2) INSTA-min.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content2" onClick={() => openModal('./ColorArch4Instagram-min.png')}>
                    <img src={images['./ColorArch4Instagram-min.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content3" onClick={() => openModal('./ColorArch2instagram1-min.png')}>
                    <img src={images['./ColorArch2instagram1-min.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content4" onClick={() => openModal('./Sah.Vvy-121-min.jpg')}>
                    <img src={images['./Sah.Vvy-121-min.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content5" onClick={() => openModal('./Sah.Vvy-118-min.jpg')}>
                    <img src={images['./Sah.Vvy-118-min.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content6" onClick={() => openModal('./Sah.Vvy-122-min.jpg')}>
                    <img src={images['./Sah.Vvy-122-min.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content7" onClick={() => openModal('./Sah.Vvy-164.jpg')}>
                    <img src={images['./Sah.Vvy-164.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content8" onClick={() => openModal('./matt.png')}>
                    <img src={images['./matt.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content9" onClick={() => openModal('./IMG_9790.png')}>
                    <img src={images['./IMG_9790.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content10" onClick={() => openModal('./Plants-mixed-layers.png')}>
                    <img src={images['./Plants-mixed-layers.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content11" onClick={() => openModal('./IMGP5181.jpg')}>
                    <img src={images['./IMGP5181.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content12" onClick={() => openModal('./IMGP5188.jpg')}>
                    <img src={images['./IMGP5188.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content13" onClick={() => openModal('./IMGP5182.jpg')}>
                    <img src={images['./IMGP5182.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content14" onClick={() => openModal('./IMG_8142.png')}>
                    <img src={images['./IMG_8142.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content15" onClick={() => openModal('./IMG_9854.jpg')}>
                    <img src={images['./IMG_9854.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content16" onClick={() => openModal('./Shloka.png')}>
                    <img src={images['./Shloka.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content17" onClick={() => openModal('./chlo.png')}>
                    <img src={images['./chlo.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content18" onClick={() => openModal('./firedept.png')}>
                    <img src={images['./firedept.png']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content19" onClick={() => openModal('./IMG_5485.jpg')}>
                    <img src={images['./IMG_5485.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content20" onClick={() => openModal('./DSC_3273.jpg')}>
                    <img src={images['./DSC_3273.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content21" onClick={() => openModal('./plantvcam.jpeg')}>
                    <img src={images['./plantvcam.jpeg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content22" onClick={() => openModal('./IMG_5475.jpg')}>
                    <img src={images['./IMG_5475.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content23" onClick={() => openModal('./IMG_7748.jpg')}>
                    <img src={images['./IMG_7748.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content24" onClick={() => openModal('./IMG_7670-.jpg')}>
                    <img src={images['./IMG_7670-.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content25" onClick={() => openModal('./IMG_7643.jpg')}>
                    <img src={images['./IMG_7643.jpg']} alt="" />
                </div>
                <div style={{ cursor: 'pointer' }} className="content26" onClick={() => openModal('./IMG_7757.jpg')}>
                    <img src={images['./IMG_7757.jpg']} alt="" />
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Image Modal"
                >
                    <img src={images[currentImage]} alt="" style={{ maxHeight: '80vh', maxWidth: '100%', objectFit: 'contain' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px' }}>
                        <div onClick={prevImage} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <button onClick={closeModal} style={{
                            padding: '5px 15px',
                            borderRadius: '5px',
                            border: 'none',
                            background: '#333',
                            color: '#fff',
                            cursor: 'pointer',
                        }}>
                            Close
                        </button>
                        <div onClick={nextImage} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </Modal>
                <footer>Ali Naqvi 2021</footer>
            </div>
        </>
    );
}

export default App;
