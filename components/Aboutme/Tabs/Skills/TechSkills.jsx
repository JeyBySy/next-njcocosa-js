
import React from 'react'
import Image from 'next/image'


const TechIcons = () => {
    const technologies = [
        { lang: "Nextjs", icon: "/icons/nextjs-original.svg" },
        { lang: "Javascript", icon: "/icons/javascript-original.svg" },
        { lang: "Nodejs", icon: "/icons/nodejs-original.svg" },
        { lang: "Express", icon: "/icons/express-original.svg" },
        { lang: "Python", icon: "/icons/python-original.svg" },
        { lang: "Django", icon: "/icons/django-plain.svg" },
        { lang: "HTML", icon: "/icons/html5-original.svg" },
        { lang: "CSS3", icon: "/icons/css3-original.svg" },
        { lang: "Tailwind", icon: "/icons/tailwindcss-original.svg" },
        { lang: "MongoDb", icon: "/icons/mongodb-original.svg" },
        { lang: "PostgreSQL", icon: "/icons/postgresql-original.svg" },
        { lang: "MySQL", icon: "/icons/mysql-original.svg" },
        { lang: "Linux", icon: "/icons/linux-original.svg" },
        { lang: "Nginx", icon: "/icons/nginx-original.svg" },
        { lang: "Git", icon: "/icons/git-original.svg" },
        { lang: "Docker", icon: "/icons/docker-original.svg" },
        { lang: "Bash", icon: "/icons/bash-original.svg" },
        { lang: "DigitalOcean", icon: "/icons/digitalocean-original.svg" },
        { lang: "Jira", icon: "/icons/jira-original.svg" },
        { lang: "Postman", icon: "/icons/postman-original.svg" },
        { lang: "slack", icon: "/icons/slack-original.svg" }
    ];

    return (
        <>
            {technologies.map((val, index) => (
                <div key={index} className='flex items-center capitalize space-x-2 min-w-[30%]'>
                    <div className="relative w-12 h-12">
                        <Image
                            src={val.icon}
                            alt={val.lang}
                            layout="fill"
                            objectFit="contain"
                            sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                        />
                    </div>
                    <span>{val.lang}</span>
                </div>
            ))}
        </>
    )
}

export default TechIcons