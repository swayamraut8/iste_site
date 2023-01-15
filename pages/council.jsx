import Layout from "../components/Layout";
import Card from "../components/council/Card";
import BE from "../components/council/be"
import TE from "../components/council/te"
import SE from "../components/council/se"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Council() {
    return (
        <Layout title="ISTE-VESIT | Council" content="Council page of ISTE-VESIT">
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto pt-16">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-3xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
                    <p className="lg:w-2/3 mx-auto mt-7 leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    <Tabs>
                        <TabList>
                            <Tab className='float-left text-3xl font-bold hover:scale-95 w-1/3 h-48 pt-16 mt-8 rounded-l-xl bg-be-tab bg-cover bg-center'>BE</Tab>
                            <Tab className='float-left text-3xl font-bold hover:scale-95 w-1/3 h-48 pt-16 mt-8 bg-te-tab bg-cover bg-center'>TE</Tab>
                            <Tab className='float-left text-3xl font-bold hover:scale-95 w-1/3 h-48 pt-16 mt-8 rounded-r-xl bg-se-tab bg-cover bg-center'>SE</Tab>
                        </TabList>
                        <TabPanel> <BE /> </TabPanel>
                        <TabPanel> <TE /> </TabPanel>
                        <TabPanel> <SE /> </TabPanel>
                    </Tabs>
                  </div>
                </div>
            </section>
        </Layout>
    );
}
