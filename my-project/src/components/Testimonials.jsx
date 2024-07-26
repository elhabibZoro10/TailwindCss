import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Elhabib",
    },
    {
      id: 1,
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "BENNANI",
    },
    {
      id: 1,
      desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
      image: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Messi",
    },
  ]);

  return (
    <section className="pb-[350px]">
      <div className="container relative ">
        <div className="absolute left-[20px] top-[-35px] ">
          <img src="/src/assets/images/bg-quotes.png" alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10 ">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              desc={item.desc}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
