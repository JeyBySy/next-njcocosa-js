import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import BadgeEmbed from './BadgeEmbed';
import Modal from '@/components/Global/Modal/page';

const Certifications = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (modalIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalIsOpen]);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage('');
    };

    return (
        <section className='tab'>
            <div className='tab_title'>
                Certifications/Badges
            </div>

            <section id='certifications' className="grid gap-5 leading-relaxed p-4">
                <div className='flex flex-wrap gap-8 relative '>
                    <div className="certs" onClick={() => openModal('/certificates/deansLister.png')}>
                        <Image src={'/certificates/deansLister.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/erovotika.png')}>
                        <Image src={'/certificates/erovotika.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/iSite.png')}>
                        <Image src={'/certificates/iSite.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/LeanSixSigma.png')}>
                        <Image src={'/certificates/LeanSixSigma.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/trendNet.png')}>
                        <Image src={'/certificates/trendNet.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                </div>
                <div className='gap-4 flex flex-wrap'>
                    <BadgeEmbed badgeId="5c1bea90-66df-4ab1-a6f2-a636add387fd" />
                    <BadgeEmbed badgeId="22a14f6c-704f-45ba-a2f7-80e57e55274e" />
                    <BadgeEmbed badgeId="f11d000d-eaf2-4c78-8a4e-2e9b70775657" />
                </div>
            </section>

            <Modal isOpen={modalIsOpen} onClose={closeModal}>
                <div className="relative w-[90vw] h-[90vh] p-5">
                    <Image src={selectedImage} layout="fill" objectFit="contain" alt={selectedImage} />
                </div>
            </Modal>
        </section>
    );
};

export default Certifications;
