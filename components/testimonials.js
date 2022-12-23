import Image from "next/image";
import React from "react";
import Container from "./container";


import userTwoImg from "../public/img/woman.png";
import userThreeImg from "../public/img/man1.png";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 justify-center lg:grid-cols-2 xl:grid-cols-3">
        
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            <Mark>Truly decentralized</Mark>, simple yet useful and community driven service
I love it. 
            </p>

            <Avatar
              image={userTwoImg}
              name="Bella"
              title="Co-Founder at PlanetSWH"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
           Many of the soon-to-be-discovered planets are <mark>super-Earths</mark>, and the challenge of finding life urges us to characterize them as best we can and unleash our creativity and building sustainable projects.
            </p>

            <Avatar
              image={userThreeImg}
              name="Dave"
              title="Co-founder of PlanetSWH"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-green-800 bg-green-100 rounded-md ring-green-100 ring-4 dark:ring-green-900 dark:bg-green-900 dark:text-green-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
