import React from "react";
import hero from "../assets/images/jp.png";
const Hero = () => {
  const social_media = [
    { icon: "logo-instagram", link: "https://www.instagram.com/younzybaba" },
    { icon: "logo-github", link: "https://www.github.com/Jp-Sources" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/example" },
    { icon: "logo-twitter", link: "https://www.twitter.com/Younzy_baba" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full ">
        <img src={hero} alt="" className="md:w-12/12 h-full object-cover rounded-full hover:animate-bounce" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Johnpaul</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8 transition ease-in-out delay-300 hover:-translate-y-1 hover:bg-pink-500 duration-400">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((socialMedia, index) => (
              <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white cursor-pointer flex items-center"
              >
                <ion-icon className="text-xl mr-1" name={socialMedia.icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
