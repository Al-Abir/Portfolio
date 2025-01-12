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
        <section id="about" className="section">
            <div className="container mx-auto bg-zinc-800/50 rounded-2xl md:p-12">
                <div>
                    <p>
                        Welcome! I&apos;m Henry, a professional web developer with a knack for crafting visually stunning
                        and highly functional websites. Combining creativity and technical expertise, I transform your vision into a digital masterpiece that excels in both appearance and performance.
                    </p>
                    <div>
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key} className="about-item">
                                    <div className="number-container">
                                        <span className="number">{number}</span>
                                        <span className="plus">+</span>
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
