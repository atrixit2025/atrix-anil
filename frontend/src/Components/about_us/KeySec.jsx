import React from 'react';

const keyPoints = [
    {
        img: "/wp-content/uploads/2022/12/value.svg",
        alt: "Values",
        title: "Values",
        description: "Ethical solutions and guided by a moral compass we add value to our client's lives through our products and solutions."
    },
    {
        img: "/wp-content/uploads/2022/12/Innovation.svg",
        alt: "Innovation",
        title: "Innovation",
        description: "We are never afraid to go beyond industry standards and accomplish something outside the box."
    },
    {
        img: "/wp-content/uploads/2022/12/Integrity.svg",
        alt: "Integrity",
        title: "Integrity",
        description: "Integrity is our standpoint. We are driven by our commitment to the work we do."
    },
    {
        img: "/wp-content/uploads/2022/12/Agile-Solutions.svg",
        alt: "Agile Solutions",
        title: "Agile Solutions",
        description: "We strive to provide agile solutions to our clients that deliver incremental digital innovation."
    },
    {
        img: "/wp-content/uploads/2022/12/Culture.svg",
        alt: "Culture",
        title: "Culture",
        description: "As a team we are always learning, upgrading, and sharing our knowledge."
    },
    {
        img: "/wp-content/uploads/2022/12/Kindness.svg",
        alt: "Kindness",
        title: "Kindness",
        description: "Our empathy to our client's needs and requirements enables us to stay on the same page at all times."
    }
];

const KeySec = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyPoints.map((item, index) => (
                    <div
                        key={index}
                        className={`key_box text-center p-6 shadow-lg rounded-lg ${index % 2 === 1 ? 'bg-black' : 'bg-transparent'}`}
                    >
                        <div className="key_img mb-4">
                            <img src={item.img} alt={item.alt} className="mx-auto w-16" />
                        </div>
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KeySec;
