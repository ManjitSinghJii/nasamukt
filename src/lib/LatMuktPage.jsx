import React from 'react';
import { Collapse, Button } from 'antd';
const { Panel } = Collapse;

const FAQs = [
  { question: "What is Lat Mukt?", answer: "Lat Mukt is an Ayurvedic tonic designed to help individuals overcome addiction naturally." },
  { question: "Is Lat Mukt safe to use?", answer: "Yes, it's made with natural herbs and is free from harmful chemicals." },
  { question: "How long should I take Lat Mukt?", answer: "Recommended use is at least 3 months or as advised by your practitioner." },
  { question: "Will it work for all types of addiction?", answer: "Lat Mukt is effective for alcohol, smoking, and certain substance dependencies." },
  { question: "Does it cause withdrawal symptoms?", answer: "No, it helps minimize withdrawal symptoms safely." },
  { question: "Can it be taken with other medicines?", answer: "Please consult your doctor before combining with other medications." },
  { question: "Is a prescription required to buy Lat Mukt?", answer: "No, it's available without prescription as a wellness tonic." },
];

const LatMuktPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#fef4eb] px-6 py-10 flex flex-col md:flex-row items-center justify-between">
        <img src="/images/nasa.jpg" alt="Lat Mukt Product" className="w-full md:w-1/2 rounded-xl shadow-md" />
        <div className="md:ml-10 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">नशा मुक्त जीवन का समाधान - LAT MUKT</h1>
          <p className="text-lg text-gray-700 mb-4">100% आयुर्वेदिक समाधान जो नशे की लत को जड़ से खत्म करता है।</p>
          <Button type="primary" size="large">Order Now</Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Lat Mukt</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Lat Mukt is an Ayurvedic blend of powerful herbs, designed to naturally aid in overcoming drug and alcohol addiction. Our formula helps cleanse the system and reduce cravings.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Collapse accordion>
            {FAQs.map((faq, index) => (
              <Panel header={faq.question} key={index}>
                <p>{faq.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </div>
      </section>

      {/* Empowering Banner */}
      <section className="bg-gradient-to-r from-green-100 to-green-200 text-center py-10 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Empowering Wellness Through Organic Solutions</h2>
        <Button type="default">Explore Wellness</Button>
      </section>
    </div>
  );
};

export default LatMuktPage;
