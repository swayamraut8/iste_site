import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function TE() {
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
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                          <Card name='Divisha Gupta' position='Executive Secretary' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Subrato Tapaswi' position='Managing Secretary' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Anushka Darure' position='Operations Secretary' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Manas Lalwani' position='Junior Treasurer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                  </section>
              </TabPanel>
              <TabPanel>
                  <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10">
                          <Card name='Sarvesh Patil' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Atharva Bhoite' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Bhargav Bodhankar' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Japneet Rajput' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                          <Card name='Surya Ganiga' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Hrishikesh Patil' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Hrishikesh Kumbhar' position='Junior Technical Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                  </section>
              </TabPanel>
              <TabPanel>
                  <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                          <Card name='Upendra Falak' position='Junior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Shrey Panchamia' position='Junior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Denzil Nelson' position='Junior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                          <Card name='Sahil Kodwani' position='Junior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Neeraj Chawla' position='Junior Operations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                  </section>
              </TabPanel>
              <TabPanel>
                  <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                          <Card name='Anushka Kulkarni' position='Public Relations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Atharva Joshi' position='Public Relations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='Khushi Mahamunkar' position='Public Relations Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                  </section>
              </TabPanel>
              <TabPanel>
                  <section className="text-gray-400 bg-gray-900 body-font pt-16 mt-8">
                      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                          <Card name='Omkar Mahajan' position='Junior Graphics Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                          <Card name='C.S Lakshmi' position='Junior Graphics Officer' image='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'/>
                      </div>
                  </section>
              </TabPanel>
          </Tabs>
      </div>
    );
}
