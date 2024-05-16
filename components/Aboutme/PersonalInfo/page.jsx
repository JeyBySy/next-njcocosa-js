import React from 'react'

const PersonalInfo = () => {
    const info = [
        {
            title: "Degree",
            content: "Bachelor's Degree in Information Technology"
        },
        {
            title: "School",
            content: "Batangas State University - The National Engineering University"
        },
        {
            title: "Address",
            content: "Paharang, Batangas City, Batangas, PH"
        },
        {
            title: "Nationality",
            content: "Filipino"
        },
        {
            title: "Email",
            content: "njcocosa@gmail.com"
        },

    ]
    return (
        <>
            <div className="text-base mt-4 text-justify mb-4 px-4">
                <p>
                    Hello! My name is <span className='font-extrabold text-green-300'>Niño Jherico Cocosa</span>, a Web developer based in Paharang, Batangas City, Philippines. My path in web development has been driven by a passion for solving problems. I love diving into challenges and finding creative solutions. I&apos;m all about keeping up with the latest in tech, and I&apos;m eager to keep learning and growing in this ever-changing field.
                </p>
            </div>
            <div className='grid gap-3 px-4'>
                {info.map((val, index) => (
                    <div key={index} className='flex flex-col sm:flex-row sm:items-center'>
                        <div className='min-w-[100px] text-green-500 font-extrabold text-start capitalize sm:w-1'>
                            {val.title}:
                        </div>
                        <span className=' text-green-50 font-extrabold text-xl sm:w-2/3'>
                            {val.content}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PersonalInfo