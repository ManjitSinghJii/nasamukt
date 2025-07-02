import React from 'react';
import { Form, Input, Button } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';

const Contact = () => {
  const handleSubmit = (values) => {
    console.log('Inquiry submitted:', values);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Contact Header */}
      <section className="text-center px-4 py-12 bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us for Latmukt Support</h1>
        <p className="text-gray-600">Reach out for inquiries about our organic medicine and mission.</p>
      </section>

      {/* Form + Image Section */}
      <section className="px-6 py-12 bg-gradient-to-r from-green-100 to-green-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-green-50 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg">
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item name="name" label="Your First Name" rules={[{ required: true }]}> 
                <Input size="large" placeholder="Enter your first name" />
              </Form.Item>
              <Form.Item name="email" label="Your Email Address*" rules={[{ required: true, type: 'email' }]}> 
                <Input size="large" placeholder="Enter your email address" />
              </Form.Item>
              <Form.Item name="message" label="Your Message*" rules={[{ required: true }]}> 
                <Input.TextArea rows={4} size="large" placeholder="Type your message here" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" className="bg-green-600 hover:bg-green-700 transition duration-200">
                  Submit Your Inquiry
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
            <img src="/images/botal.jpg" alt="Latmukt Bottle" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Details + Map */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">Reach out to us for inquiries about our anti-drug and alcohol organic medicine product.</p>
            <p className="flex items-center gap-2 text-gray-700"><EnvironmentOutlined /> <strong>Location:</strong> 123 Wellness St, City, Country</p>
            <p className="flex items-center gap-2 text-gray-700 mt-2"><ClockCircleOutlined /> <strong>Hours:</strong> 9 AM - 5 PM</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.859129548088!2d-72.57276448454359!3d42.12649637920471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6d169b3f89eeb%3A0x52c7ed55d7bbd9fa!2sTexas%20Roadhouse!5e0!3m2!1sen!2sus!4v1719916484705!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
