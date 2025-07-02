import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Row,
  Col,
  Typography,
  Select,
  Skeleton,
  Drawer,
  InputNumber,
  message
} from 'antd';
import {
  ShoppingCartOutlined,
  DeleteOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const products = [
  {
    title: 'नशा छोड़ने की रामबाण दवा - LAT MUKT',
    price: 1099,
    originalPrice: 1900,
    image: '/images/nasa.jpg',
    tag: 'FAST SELLING'
  },
  {
    title: 'Natural Detox Capsules',
    price: 899,
    originalPrice: 1299,
    image: '/images/about/e.jpg',
    tag: 'TOP RATED'
  },
  {
    title: 'Herbal Stress Relief Drops',
    price: 749,
    originalPrice: 999,
    image: '/images/about/h.jpg',
    tag: 'BEST SELLER'
  },
  {
    title: 'Organic Wellness Tonic',
    price: 1199,
    originalPrice: 1599,
    image: '/images/about/a.jpg',
    tag: 'NEW'
  },
  {
    title: 'Organic Tonic',
    price: 1199,
    originalPrice: 1599,
    image: '/images/about/b.jpg',
    tag: 'NEW'
  }
];

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyNow = (product) => {
    setCartItem(product);
    setQuantity(1);
    setDrawerVisible(true);
  };

  const handleQtyChange = (value) => {
    setQuantity(value);
  };

  const handleCheckout = () => {
    message.success('Product added successfully!');
    setDrawerVisible(false);
  };

  const subtotal = cartItem ? cartItem.price * quantity : 0;

  return (
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      // style={{ backgroundImage: "url('/images/hand.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <Title level={3}>Shop</Title>
          <div className="flex items-center gap-2">
            <Text>Sort by:</Text>
            <Select defaultValue="default" size="middle">
              <Option value="default">Default</Option>
              <Option value="priceLow">Price: Low to High</Option>
              <Option value="priceHigh">Price: High to Low</Option>
            </Select>
          </div>
        </div>

        <Row gutter={[24, 24]} justify="start">
          {products.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                className="transition duration-300 hover:shadow-2xl"
                cover={
                  <div className="relative">
                    {loading ? (
                      <Skeleton.Image className="w-full h-72 rounded-t-lg" active />
                    ) : (
                      <img
                        alt={product.title}
                        src={product.image}
                        className="w-full h-72 object-cover rounded-t-lg"
                      />
                    )}
                    {!loading && (
                      <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {product.tag}
                      </span>
                    )}
                  </div>
                }
                actions={[
                  <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    className="w-full"
                    size='large'
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </Button>
                ]}
              >
                {loading ? (
                  <Skeleton active paragraph={{ rows: 1 }} />
                ) : (
                  <>
                    <Title level={5}>{product.title}</Title>
                    <div className="flex gap-2 items-center">
                      <Text delete className="text-gray-400">
                        ₹{product.originalPrice}.00
                      </Text>
                      <Text strong className="text-green-600 text-lg">
                        ₹{product.price}.00
                      </Text>
                    </div>
                  </>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Drawer
        title="Shopping bag"
        placement="right"
        width={360}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        {cartItem && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={cartItem.image} alt={cartItem.title} className="w-16 h-16 object-cover" />
              <div className="flex-1">
                <Text strong>{cartItem.title}</Text>
                <div className="flex gap-2">
                  <Text delete>₹{cartItem.originalPrice}.00</Text>
                  <Text className="text-green-600">₹{cartItem.price}.00</Text>
                </div>
              </div>
              <DeleteOutlined className="text-red-500 cursor-pointer" onClick={() => setDrawerVisible(false)} />
            </div>

            <div className="flex justify-between items-center">
              <Text>Qty:</Text>
              <InputNumber min={1} max={10} value={quantity} onChange={handleQtyChange} />
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between mb-2">
                <Text strong>Subtotal:</Text>
                <Text strong>₹{subtotal}.00</Text>
              </div>
              <Button type="primary" size="large" className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
              <div className="text-center text-gray-400 text-sm mt-1">🔒 Secure checkout</div>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default Shop;
