import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Signup = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Signup successful!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-4xl flex flex-col md:flex-row transition-all duration-300">
        {/* Image Section */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="/images/signup.avif" // ✅ make sure your signup.png is in the /public/images folder
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <Title level={3} className="text-center mb-6">Create an Account</Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input size="large" prefix={<UserOutlined />} placeholder="Enter full name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Enter a valid email' }
              ]}
            >
              <Input size="large" prefix={<MailOutlined />} placeholder="Enter email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password size="large" prefix={<LockOutlined />} placeholder="Enter password" />
            </Form.Item>

            <Form.Item
              name="mobile"
              label="Mobile Number"
              rules={[{ required: true, message: 'Please enter your mobile number' }]}
            >
              <Input size="large" prefix={<PhoneOutlined />} placeholder="Enter mobile number" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="w-full">
                Sign Up
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center text-sm text-gray-500">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
