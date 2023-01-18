import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";

export default function BE() {
    const [heads, setHeads] = useState(false);
    const [tech, setTech] = useState(false);
    const [ops, setOps] = useState(false);
    const [graphics, setGraphics] = useState(false);
    return (
          <div>
              <Tabs>
                  <TabList>
                      <Tab className={`${heads && "animate-clickbe"} float-left bg-gray-800 hover:bg-gray-700 w-1/4 py-2 mt-8 rounded-l-xl`} onClick={() => {setHeads(true);}} onAnimationEnd={() => setHeads(false)}>
                          Heads
                      </Tab>
                      <Tab className={`${tech && "animate-clickbe"} float-left bg-gray-800 hover:bg-gray-700 w-1/4 py-2 mt-8`} onClick={() => {setTech(true);}} onAnimationEnd={() => setTech(false)}>
                          Tech
                      </Tab>
                      <Tab className={`${ops && "animate-clickbe"} float-left bg-gray-800 hover:bg-gray-700 w-1/4 py-2 mt-8`} onClick={() => {setOps(true);}} onAnimationEnd={() => setOps(false)}>
                          Operations
                      </Tab>
                      <Tab className={`${graphics && "animate-clickbe"} float-left bg-gray-800 hover:bg-gray-700 w-1/4 py-2 mt-8 rounded-r-xl`} onClick={() => {setGraphics(true);}} onAnimationEnd={() => setGraphics(false)}>
                          Graphics
                      </Tab>
                  </TabList>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Varnit Batheja' position='Chairperson' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name='Srushti Jagtap' position='Co-Chairperson' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Mrunmayee Waingankar' position='Chief Executive Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Devansh Singh' position='Senior Treasurer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Isha Gawde' position='Chief Marketing Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Aamir Ansari' position='Chief Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name='V Krishnasubramaniam' position='Senior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Kusum Rohra' position='Senior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Khushboo Dalwani' position='Senior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Khushboo Dhingra' position='Senior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Gauri Mahajan' position='Chief Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                              <Card name='Minal Katware' position='Senior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Nidhi Thakkar' position='Senior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                              <Card name='Nafees Akhter' position='Senior Graphics Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Swarali Patil' position='Senior Graphics Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Jisha Philip' position='Senior Editor' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                              <Card name='Shrusti Govindwar' position='Senior Editor' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          </div>
                      </section>
                  </TabPanel>
              </Tabs>
          </div>
    );
}
