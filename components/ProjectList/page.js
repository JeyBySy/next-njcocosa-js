import Image from 'next/image'
const ProjectLists = ({ projects }) => {
    return (
        <>
            <section>
                {projects.map((project, i) => (
                    project.name
                ))}
            </section>
        </>
    );
};

export default ProjectLists;