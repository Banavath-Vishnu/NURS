import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">THIS PROJECT</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt="About This Project"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            This project is a web application I built by following a tutorial from the 
            <b> Great Stack</b> YouTube channel. It helped me enhance my skills in 
            front-end development, UI/UX design, and building responsive web applications.
          </p>
          <p>
            Through this project, I gained hands-on experience in structuring React 
            components, styling with Tailwind CSS, and improving user interaction. 
            It was an exciting learning journey that strengthened my ability to create 
            modern web applications.
          </p>
          <b className="text-gray-800">Project Vision</b>
          <p>
            The goal of this project was to practice real-world UI/UX design principles 
            while improving my proficiency in modern front-end technologies. It serves as 
            a foundation for building more complex and scalable applications in the future.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">THIS PROJECT MATTERS</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Learning Experience:</b>
          <p>
            Helped me understand React components, state management, and responsive design.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>UI/UX Improvement:</b>
          <p>
            Allowed me to explore design best practices and implement user-friendly interfaces.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Future Scalability:</b>
          <p>
            This project lays the groundwork for future enhancements and full-stack integrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
