import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import data from "../../data/Council/se";

export default function SE() {
    const [heads, setHeads] = useState(false);
    const [tech, setTech] = useState(false);
    const [ops, setOps] = useState(false);
    const [pro, setPro] = useState(false);
    const [graphics, setGraphics] = useState(false);
    return (
          <div>
              <Tabs>
                  <TabList>
                      <Tab className={`${heads && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/5 py-2 mt-8 rounded-l-xl`} onClick={() => {setHeads(true);}} onAnimationEnd={() => setHeads(false)}>
                          Heads
                      </Tab>
                      <Tab className={`${tech && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/5 py-2 mt-8`} onClick={() => {setTech(true);}} onAnimationEnd={() => setTech(false)}>
                          Tech
                      </Tab>
                      <Tab className={`${ops && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/5 py-2 mt-8`} onClick={() => {setOps(true);}} onAnimationEnd={() => setOps(false)}>
                          Operations
                      </Tab>
                      <Tab className={`${pro && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/5 py-2 mt-8`} onClick={() => {setPro(true);}} onAnimationEnd={() => setPro(false)}>
                          P.R.O
                      </Tab>
                      <Tab className={`${graphics && "animate-clickbe"} float-left text-slate-200 bg-zinc-900 hover:bg-zinc-700 w-1/5 py-2 mt-8 rounded-r-xl`} onClick={() => {setGraphics(true);}} onAnimationEnd={() => setGraphics(false)}>
                          Graphics
                      </Tab>
                  </TabList>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg' insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg'  insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg' insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg' insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-zinc-900 bg-gray-200 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name={data[0].name} position={data[0].position} image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg' insta={data[0].insta} linkedin={data[0].linkedin} github={data[0].github}/>
                          </div>
                      </section>
                  </TabPanel>
              </Tabs>
          </div>
    );
}
