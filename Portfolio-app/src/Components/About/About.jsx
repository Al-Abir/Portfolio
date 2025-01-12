import React from 'react';

const aboutItems = [
    {
        label: 'Project done',
        number: 45
    },
    {
        label: 'Years of experience',
        number: 10
    }
];

const About = () => {
    return (
        <section id="about" className="section ml-4">
            <div className="container mx-auto bg-zinc-800/50 rounded-2xl md:p-12">
                <div>
                    <p className=' text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                        Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning
                        and highly functional websites. Combining creativity and technical expertise, I transform your vision into a digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key} className="about-item">
                                    <div className="flex itmes-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span>
                                        <span className="text-sky-400 font-semibold text-2xl md:text-3xl">+</span>
                                    </div>
                                    <p className="label">
                                        {label}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
