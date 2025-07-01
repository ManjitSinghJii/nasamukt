import React from 'react';
import { Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-16">
      {/* Card 1 */}
      <Card
      className=''
        hoverable
        cover={
          <img
            alt="Product 1"
            src='images/e.jpg'
            className="object-cover h-64 w-full"
          />
        }
        actions={[
          <Button type="primary" size='large' icon={<ArrowRightOutlined />} className='!bg-[#2b9cc9] ' >Buy Now</Button>
        ]}
      >
        <Meta
          title="Natural Remedies"
          description="This is a description for Natural Remedies It's brief and informative."
        />
      </Card>

      {/* Card 2 */}
      <Card
        hoverable
        cover={
          <img
            alt="Product 2"
            src="images/f.jpg"
            className="object-cover h-64 w-full"
          />
        }
        actions={[
          <Button type="primary" size='large' icon={<ArrowRightOutlined />} className='!bg-[#2b9cc9] ' >Buy Now</Button>
        ]}
      >
        <Meta
          title="Organic Healing"
          description="This is a description for Organic Healing High quality and best choice!"
        />
      </Card>
    </div>
  );
};

export default ProductCards;
