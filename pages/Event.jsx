import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import cardList from "../data/events";
import { useEffect, useId, useState } from "react";
import { motion } from "framer-motion";

const Event = () => {
  const items = ["Tech Workshops", "Non Tech Workshops", "Fun Events"];
  const [currentIndex, setCurrentIndex] = useState(1);
  const id = useId();
  const onChange = (index, value) => console.log(index, value);
  useEffect(() => {
    onChange(currentIndex, items[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <Layout title="Home">
        <div className="control-container w-11/12 ml-24 mt-5 p-2 inline-flex justify-between rounded-sm ">
          {items.map((item, index) => {
            return (
              <div
                className="control-item"
                onClick={() => setCurrentIndex(index)}
              >
                {currentIndex === index && (
                  <>
                    <motion.div
                      layoutId={id}
                      className="control-item-bg"
                    ></motion.div>
                  </>
                )}
                <div className="control-item-text">{item}</div>
              </div>
            );
          })}
        </div>
        <div className="h-fit w-fit mx-auto">
          <main className="container text-center py-16">
            <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-10">
              {cardList.map((card) => (
                <>
                {card.type==items[currentIndex]?<div className="flex flex-col bg-slate-100 justify-center">
                  <div className="group h-72 w-72 sm:h-96 sm:w-96">
                    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 ">
                      <div className="absolute inset-0 bg-slate-400 rounded-xl">
                        <Image
                          className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                          src={card.img}
                          width={400}
                          height={400}
                          alt="Post image"
                        />
                        <div className="absolute inset-0 opacity-0 hover:opacity-80 rounded-xl transition-opacity hover:cursor-auto bg-black/80">
                          <div className="mt-32 opacity-100 text-center">
                            <h3 className="text-white pb-3">
                              {card.title}
                            </h3>
                            <p className="text-white pb-5">Event content</p>
                            <Link
                              href={"https://www.instagram.com/p/CmPK5WUPWh6/"}
                              className="rounded-xl p-2 pb-3 bg-white hover:cursor-pointer hover:text-black border-white"
                            >
                              Check event
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>:''}
                </>
              ))}
            </div>
          </main>
        </div>
        <div style={{ marginTop: "16px" }}></div>
      </Layout>
    </>
  );
};

export default Event;
