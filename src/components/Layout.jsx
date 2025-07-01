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
      <footer className="flex justify-around items-center bg-[#1c3b2e] h-[350px] p-12 text-center text-sm text-gray-600">
        <div className='text-white space-y-4'>
            <h1 className='text-3xl font-bold'>Healing</h1>
            <p className='text-lg font-medium'>Dedicated to organic solutions for addiction recovery.</p>
            <Button className='!text-white !text-4xl' type='text' size='large'>{<FacebookOutlined />} </Button>
            <Button className='!text-white !text-4xl' type='text' size='large'>{<InstagramOutlined />} </Button>
            <p className='mt-10'>© 2025. All rights reserved.</p>
        </div>

        <div className='text-white space-y-4'>
            <h1 className='text-2xl font-bold'>SUPPORT</h1>
            <p className='text-md font-medium'>+91 9199157555</p>
            <p className='text-lg font-medium'>latnashakwellness@gmail.com</p>
        </div>

        <div className='text-white space-y-4'>
            <h1 className='text-2xl font-semibold'>WELLNESS</h1>
            <div className=''>
                <Form layout='vertical' >
                    <Form.Item name='email' label={<h1 className='!text-white text-lg font-semibold'>Enter your Email</h1>} rules={[{required: true, type: 'email'}]} >
                        <Input size='large' placeholder='abc@gmail.com' />
                    </Form.Item>

                    <Form.Item >
                        <Button htmlType='submit' size='large' type='primary' icon={<CheckOutlined />} >Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
