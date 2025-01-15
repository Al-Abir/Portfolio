import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import p1 from "../../images/people-1.jpg"
import p2 from "../../images/people-2.jpg"
import p3 from "../../images/people-3.jpg"
import p4 from "../../images/people-4.jpg"
import p5 from "../../images/people-5.jpg"
import p6 from "../../images/people-6.jpg"
const reviews = [
    {
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: p1,
      company: 'PixelForge'
    },
    {
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: p2,
      company: 'NexaWave'
    },
    {
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: p3,
      company: 'CodeCraft'
    },
    {
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: p4,
      company: 'BrightWeb'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: p5,
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: p6,
      company: 'Skyline Digital'
    }
  ];

const Review = () => {
    return (
        <section id="reviews"
        className='section overflow-hidden'>
            <div className='container'>
                <h2 className='headLine-2 mb-8'>

                   What out customers say
                </h2>

                <div className='flex items-stretch gap-3 w-fit'>
                    {
                        reviews.map(({content,name,imgSrc,company},key)=>(
                           <ReviewCard
                           key={key}
                           name={name}
                           imgSrc={imgSrc}
                           company={company}
                           content= {content}
                           ></ReviewCard>
                        ))
                    }


                </div>

            </div>

        </section>
    );
};

export default Review;