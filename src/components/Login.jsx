import React from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Login:', values);
    message.success('Logged in successfully!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden flex flex-col md:flex-row w-full max-w-4xl transition-all duration-300">
        
        {/* Left Image */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center bg-blue-50 p-6">
          <img
            src="/images/login.jpg" // ✅ make sure it's placed in public/images/
            alt="Login Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <Title level={3} className="text-center mb-6">Welcome Back</Title>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Email"
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

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="w-full">
                Login
              </Button>
            </Form.Item>
          </Form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
