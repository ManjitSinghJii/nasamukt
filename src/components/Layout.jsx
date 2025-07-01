// components/Layout.jsx
import { CheckOutlined, FacebookOutlined, InstagramOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-center items-center p-3 bg-green-800 text-xl font-bold text-yellow-300">
          "नशा छोड़ने के लिए अभी संपर्क करें" <span className="text-white ml-2"> - 9199157555</span>
        </div>
        <header className="bg-gray-100 p-5 flex justify-between items-center shadow-md">
          <div className="h-20 w-20">
            <img src="images/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <nav className="flex gap-5 text-lg font-medium items-center">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/shop" className="hover:text-blue-600">Shop</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
            <Button size="large" type="text" className="!font-bold !text-3xl">
              <ShoppingCartOutlined />
            </Button>
          </nav>
        </header>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-2 py-6 bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1c3b2e] text-white p-8 sm:p-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    {/* Brand Info */}
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-yellow-300">Healing</h1>
      <p className="text-lg font-medium text-gray-200">
        Dedicated to organic solutions for addiction recovery.
      </p>
      <div className="flex justify-center md:justify-start gap-4">
        <Button className="!text-white !text-3xl" type="text" size="large">
          <FacebookOutlined />
        </Button>
        <Button className="!text-white !text-3xl" type="text" size="large">
          <InstagramOutlined />
        </Button>
      </div>
      <p className="pt-6 text-sm text-gray-400">© 2025. All rights reserved.</p>
    </div>

    {/* Support Info */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-300">SUPPORT</h2>
      <p className="text-md font-medium text-gray-200">+91 9199157555</p>
      <p className="text-lg font-medium text-gray-200">latnashakwellness@gmail.com</p>
    </div>

    {/* Newsletter Form */}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-300">WELLNESS</h2>
      <Form layout="vertical">
        <Form.Item
          name="email"
          label={
            <span className="text-lg font-semibold text-white">Enter your Email</span>
          }
          rules={[{ required: true, type: "email" }]}
        >
          <Input
            size="large"
            placeholder="abc@gmail.com"
            className="rounded-md"
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            icon={<CheckOutlined />}
            className="w-full md:w-auto"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Layout;
