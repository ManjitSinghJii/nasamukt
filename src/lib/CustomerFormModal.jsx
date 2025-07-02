import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Row, Col, InputNumber, message } from 'antd';

const { Option } = Select;

const CustomerFormModal = () => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [form] = Form.useForm();

  const product = {
    title: 'Herbal Detox Tonic',
    description: 'A natural solution for drug and alcohol detox. Supports liver function and improves mental clarity.',
    price: 499,
    image: '/images/a.jpg',
  };

  const handleFinish = (values) => {
    const finalData = {
      ...values,
      product: product.title,
      quantity,
      totalPrice: quantity * product.price,
    };
    console.log('Order Placed:', finalData);

    message.success('Order placed successfully!');
    form.resetFields();
    setQuantity(1);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <img src={product.image} alt="Product" className="w-full h-48 object-cover rounded" />
        <h2 className="mt-4 text-lg font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-green-600 font-semibold text-xl mt-2">₹ {product.price}</p>
        <Button onClick={() => setOpen(true)} type="primary" className="mt-4 w-full">
          Buy Now
        </Button>
      </div>

      {/* Modal Starts */}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width="100%"
        className="max-w-screen-lg mx-auto"
        centered
        bodyStyle={{ padding: 24, maxHeight: '80vh', overflowY: 'auto' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Info */}
          <div className="bg-gray-100 p-6 rounded-lg space-y-4">
            <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-lg" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <div className="flex items-center justify-between">
              <label className="font-semibold">Quantity:</label>
              <InputNumber min={1} value={quantity} onChange={setQuantity} />
            </div>
            <div className="text-lg font-bold text-green-600">
              ₹ {(quantity * product.price).toLocaleString()}
            </div>
          </div>

          {/* Form */}
          <div className="p-4">
            <Form layout="vertical" form={form} onFinish={handleFinish}>
              <Form.Item name="fullName" label="Full Name" rules={[{ required: true }]}>
                <Input size="large" placeholder="Enter Name" />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input size="large" placeholder="Enter Email" />
              </Form.Item>
              <Form.Item name="phone" label="Phone Number" rules={[{ required: true }]}>
                <Input size="large" placeholder="Enter Phone" />
              </Form.Item>
              <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                <Input.TextArea rows={4} size="large" placeholder="Enter Full Address" />
              </Form.Item>
              <Form.Item name="paymentMode" label="Payment Mode" rules={[{ required: true }]}>
                <Select size="large" placeholder="Choose Payment Mode">
                  <Option value="cash">Cash</Option>
                  <Option value="upi">UPI</Option>
                  <Option value="card">Card</Option>
                </Select>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Place Order
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CustomerFormModal;



