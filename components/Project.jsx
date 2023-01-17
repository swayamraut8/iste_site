import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

import { projectData, responsive } from "../data/project";
import Link from "next/link";

const Project = () => {
  return (
    <div>
      <h2 className=" text-center mt-[10px] sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Projects
      </h2>
      <Carousel draggable={true} responsive={responsive} className="ml-24">
        {projectData.map((card) => (
          <>
            <div className="flex flex-col bg-slate-100 justify-center">
              <div className="sm:px-auto group h-96 w-96">
                <div className="m10 relative h-full w-full rounded-xl shadow-xl transition-all duration-500 ">
                  <div className="absolute inset-0 bg-slate-400 rounded-xl">
                    <img
                      className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                      src={card.img}
                      //   width={400}
                      //   height={400}
                      alt="Post image"
                    />
                    <div className="absolute inset-0 opacity-0 hover:opacity-80 rounded-xl transition-opacity hover:cursor-auto bg-black/80">
                      <div className="mt-32 opacity-100 text-center">
                        <h3 className="text-white pb-3">{card.title}</h3>
                        <p className="text-white pb-5">{card.text}</p>
                        <Link
                          href={"https://www.instagram.com/p/CmPK5WUPWh6/"}
                          className="rounded-xl p-2 pb-3 hover:bg-white hover:border-black border-white border bg-black hover:cursor-pointer text-white hover:text-black"
                        >
                          Check event
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Project;