import React, { useState } from 'react';
import { Typography, Button, InputNumber, Divider } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ProductDetails = () => {
  const imageList = [
    '/images/nasa.jpg',
    '/images/bb.jpg',
    '/images/cc.jpg',
    '/images/dd.jpg',
    '/images/aa.jpg'
  ];
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((q) => Math.min(q + 1, 10));
  const decreaseQty = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE - Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl shadow-lg p-4 transition-all duration-300 hover:scale-[1.01]">
            <img
              src={selectedImage}
              alt="Main Product"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-4 grid grid-cols-5 gap-2">
              {imageList.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumb ${index}`}
                  onClick={() => setSelectedImage(img)}
                  className={`h-16 w-full object-cover rounded-md border-2 transition duration-200 cursor-pointer hover:scale-105 ${
                    selectedImage === img
                      ? 'border-[#d2de2c] ring-2 ring-green-300'
                      : 'border-[#28c2e1e6]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Details Section */}
        <div className="md:w-1/2 w-full mt-6 md:mt-0">
          <Title level={3}>
            नशा छोड़ने की रामबाण दवा - <strong>LAT MUKT</strong>
          </Title>
          <Text type="secondary">DROP + TABLET</Text>
          <div className="mt-3 flex items-center gap-4">
            <Text delete className="text-lg text-gray-400">
              ₹1900.00
            </Text>
            <Text strong className="text-green-600 text-xl">
              ₹1099.00
            </Text>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-5 gap-3">
            <span className="font-semibold">Qty:</span>
            <div className="flex items-center border rounded">
              <Button icon={<MinusOutlined />} onClick={decreaseQty} />
              <InputNumber
                min={1}
                max={10}
                value={quantity}
                readOnly
                className="!w-16 text-center border-x"
              />
              <Button icon={<PlusOutlined />} onClick={increaseQty} />
            </div>
          </div>

          <Button
            size="large"
            type="default"
            className="mt-5 w-full bg-black text-white hover:bg-gray-900 transition"
            onClick={handleAddToCart}
          >
            Add to bag
          </Button>

          <Divider />

          {/* Why Choose Section */}
          <div className="mt-4">
            <Title level={4} className="flex items-center gap-2">
              🧪 Why Choose Lat Mukt? /{' '}
              <span className="text-base">लेट मुक्त क्यों चुनें?</span>
            </Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <Text className="block text-lg font-semibold mb-2">
                  English:
                </Text>
                <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                  <li>100% Herbal and Natural</li>
                  <li>Non-Habit Forming</li>
                  <li>No Side Effects</li>
                  <li>Supports Mental and Physical Detox</li>
                  <li>Helps Reduce Cravings Gradually</li>
                  <li>Strengthens Willpower</li>
                </ul>
              </div>

              <div>
                <Text className="block text-lg font-semibold mb-2">
                  Hindi:
                </Text>
                <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
                  <li>पूरी तरह से हर्बल और प्राकृतिक</li>
                  <li>किसी भी तरह की आदत नहीं बनाता</li>
                  <li>कोई साइड इफेक्ट नहीं</li>
                  <li>मानसिक और शारीरिक डिटॉक्स में सहायक</li>
                  <li>धीरे-धीरे नशे की लत कम करता है</li>
                  <li>आत्म-नियंत्रण को मजबूत करता है</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
