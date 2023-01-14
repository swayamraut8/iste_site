import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function SE() {
    return (
          <div>
              <Tabs>
                  <TabList>
                      <Tab className='float-left bg-gray-800 hover:bg-gray-600 hover:scale-95 w-1/5 py-2 mt-8 rounded-l-xl'>Heads</Tab>
                      <Tab className='float-left bg-gray-800 hover:bg-gray-600 hover:scale-95 w-1/5 py-2 mt-8'>Tech</Tab>
                      <Tab className='float-left bg-gray-800 hover:bg-gray-600 hover:scale-95 w-1/5 py-2 mt-8'>Operations</Tab>
                      <Tab className='float-left bg-gray-800 hover:bg-gray-600 hover:scale-95 w-1/5 py-2 mt-8'>P.R.O</Tab>
                      <Tab className='float-left bg-gray-800 hover:bg-gray-600 hover:scale-95 w-1/5 py-2 mt-8 rounded-r-xl'>Graphics</Tab>
                  </TabList>
                  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Undecided' position='' image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Undecided' position=''image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg' />
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Undecided' position='' image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Undecided' position='' image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg'/>
                          </div>
                      </section>
                  </TabPanel>
                  <TabPanel>
                      <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                          <div className="grid justify-center md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-7 my-10">
                              <Card name='Undecided' position='' image='https://cdn.pixabay.com/photo/2019/05/09/10/37/pointing-4190930_960_720.jpg'/>
                          </div>
                      </section>
                  </TabPanel>
              </Tabs>
          </div>
    );
}
