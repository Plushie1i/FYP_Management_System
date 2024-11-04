
import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/auth/login', values);
      if (response.data.success) {
        message.success('Login successful!');
        navigate(`/${response.data.role}-dashboard`);
      }
    } catch (error) {
      message.error(error.response?.data?.message || 'Login failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]} hasFeedback>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;









// import React, { useState } from 'react';
// import { Form, Input, Button, message } from 'antd';
// import axios from 'axios';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     try {
//       setLoading(true);
//       const response = await axios.post('/api/auth/login', values);
//       if (response.data.success) {
//         message.success('Login successful!');
//         // Redirect to dashboard based on role
//         window.location.href = `/dashboard/${response.data.role}`;
//       }
//     } catch (error) {
//       message.error(error.response.data.message || 'Login failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <Form form={form} onFinish={onFinish} layout="vertical">
//         <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
//           <Input />
//         </Form.Item>
//         <Form.Item name="password" label="Password" rules={[{ required: true }]} hasFeedback>
//           <Input.Password />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default LoginForm;








// // src/components/LoginForm.jsx
// import React from 'react';
// import { Form, Input, Button, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'antd/dist/reset.css';
// import './LoginForm.css';

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', values);
//       message.success('Login successful!');
//       // Optionally, navigate to a dashboard or another page
//       navigate('/dashboard');
//     } catch (error) {
//       message.error(error.response?.data?.message || 'Login failed. Please try again.');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-form-container">
//         <div className="header">
//           <img src="/path-to-logo.png" alt="App Logo" className="logo" />
//           <h1 className="app-name">FYP Management System</h1>
//         </div>
//         <Form
//           name="login"
//           onFinish={onFinish}
//           layout="vertical"
//           className="login-form"
//         >
//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[
//               { required: true, message: 'Please enter your email!' },
//               { type: 'email', message: 'Please enter a valid email!' },
//             ]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Password"
//             name="password"
//             rules={[{ required: true, message: 'Please enter your password!' }]}
//           >
//             <Input.Password />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
