import React, { useState } from 'react';
import Image from 'next/image';
import BadgeEmbed from './BadgeEmbed';
import Modal from '@/components/Global/Modal/page';


const Certifications = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

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
                    <div className=" certs" onClick={() => openModal('/certificates/erovotika.png')}>
                        <Image src={'/certificates/erovotika.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className=" certs" onClick={() => openModal('/certificates/iSite.png')}>
                        <Image src={'/certificates/iSite.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/LeanSixSigma.png')}>
                        <Image src={'/certificates/LeanSixSigma.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                    <div className="certs" onClick={() => openModal('/certificates/trendNet.png')}>
                        <Image src={'/certificates/trendNet.png'} layout="fill" objectFit="contain" alt='Deans Lister Certificate' />
                    </div>
                </div>
                <div className='flex gap-2'>
                    <BadgeEmbed badgeId="5c1bea90-66df-4ab1-a6f2-a636add387fd" />
                    <BadgeEmbed badgeId="22a14f6c-704f-45ba-a2f7-80e57e55274e" />
                    <BadgeEmbed badgeId="f11d000d-eaf2-4c78-8a4e-2e9b70775657" />
                </div>
            </section>

            <Modal isOpen={modalIsOpen} onClose={closeModal}>
                <div className="relative w-full h-full bg-green-900">
                    <Image src={selectedImage} layout="fill" objectFit="contain" alt="Selected Certificate" />
                </div>
            </Modal>
        </section>
    );
};

export default Certifications;
