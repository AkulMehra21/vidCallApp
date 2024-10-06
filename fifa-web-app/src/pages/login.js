import React, { useState } from 'react';
import { Form, Input, Select, Button, Divider, Space, Typography, message } from 'antd';

const { Title } = Typography;

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const onFinish = (values) => {
    console.log('Received values:', values);
    message.success(`Code sent to ${values.phone}`);
  };

  const areaCodeOptions = [
        {
            value: '+1',
            label: '+1 US'
        },
        {
            value: '+2',
            label: '+2 NA'
        },
        {
            value: '+3',
            label: '+2 LS'
        },
    ]

  return (
    <Space>
        <Title>Beat the best. Be the Best.</Title>
        <Space.Compact>
            <Select defaultValue="+1" options={areaCodeOptions} />
            <Input placeholder="2063992570" />
        </Space.Compact>
    </Space>
  );
};

export default LoginPage;
