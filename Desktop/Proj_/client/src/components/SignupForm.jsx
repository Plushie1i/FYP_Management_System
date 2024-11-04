
import React, { useState, useEffect } from 'react'; 
import { Form, Input, Select, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupForm.css';
import CollabPic from './pictures/collab-pic.webp';
import Logo from './pictures/logo.jpg';

const { Option } = Select;

const SignupForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [departments] = useState([{ id: 1, name: 'CS' }, { id: 2, name: 'IT' }, { id: 3, name: 'EE' }]);
  const [roles] = useState([{ id: 1, name: 'Student' }, { id: 2, name: 'Supervisor' }, { id: 3, name: 'Admin' }]);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/auth/signup', values);
      if (response.data.success) {
        message.success('Signup successful! Check your email for verification.');
        navigate('/login');
      }
    } catch (error) {
      message.error( error.response?.data?.message || 'Signup failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={CollabPic} alt="Team Collaboration" />
      </div>
      <div className="signup-page">
        <div className="signup-form-container">
          <div className="header">
            <img src={Logo} alt="App Logo" className="logo" />
            <h1 className="app-name">Signup</h1>
          </div>
          <div className="signup-form">
    
            <Form form={form} onFinish={onFinish} layout="vertical">
              <Form.Item name="name" label="Name" rules={[{ required: true }]} hasFeedback>
                <Input />
              </Form.Item>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
                <Input />
              </Form.Item>
              <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]} hasFeedback>
                <Input.Password />
              </Form.Item>
              <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['password']} rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) return Promise.resolve();
                    return Promise.reject(new Error('The two passwords do not match!'));
                  },
                }),
              ]} hasFeedback>
                <Input.Password />
              </Form.Item>
              <Form.Item name="role" label="Role" rules={[{ required: true }]} hasFeedback>
                <Select>
                  {roles.map((role) => (
                    <Option key={role.id} value={role.name}>{role.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="department" label="Department" rules={[{ required: true }]} hasFeedback>
                <Select>
                  {departments.map((department) => (
                    <Option key={department.id} value={department.name}>{department.name}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item name="semester" label="Semester" rules={[{ required: true }]}>
                <Input type="number" min={1} max={8} />
              </Form.Item>
              <Form.Item name="rollNumber" label="Roll Number" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>Signup</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;












// import React, { useState, useEffect } from 'react';
// import { Form, Input, Select, Button, message } from 'antd';
// import './SignupForm.css';
// import CollabPic from './pictures/collab-pic.webp';
// import Logo from './pictures/logo.jpg';

// const { Option } = Select;

// const SignupForm = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [departments, setDepartments] = useState([
//     { id: 1, name: 'CS' },
//     { id: 2, name: 'IT' },
//     { id: 3, name: 'EE' }
//   ]); // Static data for testing
//   const [roles, setRoles] = useState([
//     { id: 1, name: 'Student' },
//     { id: 2, name: 'Supervisor' },
//     { id: 3, name: 'Admin' }
//   ]); // Static data for testing

//   const onFinish = async (values) => {
//     try {
//       setLoading(true);
//       const response = await axios.post('/api/auth/signup', values);
//       if (response.data.success) {
//         message.success('Signup successful! Check your email for verification.');
//       }
//     } catch (error) {
//       message.error(error.response?.data?.message || 'Signup failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       {/* Left side with image */}
//       <div className="signup-image">
//         <img src={CollabPic} alt="Team Collaboration" />
//       </div>
//       <div className="signup-page">
//         <div className="signup-form-container">
//           <div className="header">
//             <img src={Logo} alt="App Logo" className="logo" />
//             <h1 className="app-name">Signup</h1>
//           </div>

//           {/* Right side with form */}
//           <div className="signup-form">
//             <h2>SignUp</h2>
//             <Form form={form} onFinish={onFinish} layout="vertical">
//               <Form.Item name="name" label="Name" rules={[{ required: true }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]} hasFeedback>
//                 <Input.Password />
//               </Form.Item>
//               <Form.Item name="role" label="Role" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {roles.map((role) => (
//                     <Option key={role.id} value={role.name}>
//                       {role.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item name="department" label="Department" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {departments.map((department) => (
//                     <Option key={department.id} value={department.name}>
//                       {department.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loading}>
//                   Signup
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;



// // src/components/SignupForm.jsx


// import React, { useState, useEffect } from 'react';
// import { Form, Input, Select, Button, message } from 'antd';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link for navigation
// import './SignupForm.css';

// const { Option } = Select;

// const SignupForm = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [departments, setDepartments] = useState([]);
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [deptResponse, roleResponse] = await Promise.all([
//           axios.get('/api/departments'),
//           axios.get('/api/roles')
//         ]);
//         setDepartments(deptResponse.data);
//         setRoles(roleResponse.data);
//       } catch (error) {
//         message.error('Failed to fetch form options');
//       }
//     };
//     fetchData();
//   }, []); // Empty dependency array ensures this only runs once

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await axios.post('/api/auth/signup', values);
//       if (response.data.success) {
//         message.success('Signup successful! Check your email for verification.');
//         form.resetFields(); // Reset form upon successful submission
//       }
//     } catch (error) {
//       message.error(error.response?.data?.message || 'Signup failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-image">
//         <img src="/src/components/pictures/collab-pic.webp" alt="Team Collaboration" />
//       </div>
//       <div className="signup-page">
//         <div className="signup-form-container">
//           <div className="header">
//             <img src="/src/components/pictures/logo.jpg" alt="App Logo" className="logo" />
//             <h1 className="app-name">Signup</h1>
//           </div>
//           <div className="signup-form">
//             <h2>Sign Up</h2>
//             <Form form={form} onFinish={onFinish} layout="vertical">
//               <Form.Item name="name" label="Name" rules={[{ required: true }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]} hasFeedback>
//                 <Input.Password />
//               </Form.Item>
//               <Form.Item name="role" label="Role" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {roles.map((role) => (
//                     <Option key={role.id} value={role.name}>
//                       {role.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item name="department" label="Department" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {departments.map((department) => (
//                     <Option key={department.id} value={department.name}>
//                       {department.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loading}>
//                   Signup
//                 </Button>
//                 <Link to="/forgot-password" style={{ marginLeft: '16px' }}>
//                   Forgot Password?
//                 </Link>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;






// import React, { useState, useEffect } from 'react';
// import { Form, Input, Select, Button, message } from 'antd';
// import './SignupForm.css';
// import CollabPic from './pictures/collab-pic.webp';
// import Logo from './pictures/logo.jpg';

// const { Option } = Select;

// const SignupForm = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [departments, setDepartments] = useState([
//     { id: 1, name: 'CS' },
//     { id: 2, name: 'IT' },
//     { id: 3, name: 'EE' }
//   ]); // Static data for testing
//   const [roles, setRoles] = useState([
//     { id: 1, name: 'Student' },
//     { id: 2, name: 'Supervisor' },
//     { id: 3, name: 'Admin' }
//   ]); // Static data for testing

//   const onFinish = async (values) => {
//     try {
//       setLoading(true);
//       const response = await axios.post('/api/auth/signup', values);
//       if (response.data.success) {
//         message.success('Signup successful! Check your email for verification.');
//       }
//     } catch (error) {
//       message.error(error.response?.data?.message || 'Signup failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup-container">
//       {/* Left side with image */}
//       <div className="signup-image">
//         <img src={CollabPic} alt="Team Collaboration" />
//       </div>
//       <div className="signup-page">
//         <div className="signup-form-container">
//           <div className="header">
//             <img src={Logo} alt="App Logo" className="logo" />
//             <h1 className="app-name">Signup</h1>
//           </div>

//           {/* Right side with form */}
//           <div className="signup-form">
            
//             <Form form={form} onFinish={onFinish} layout="vertical">
//               <Form.Item name="name" label="Name" rules={[{ required: true }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]} hasFeedback>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]} hasFeedback>
//                 <Input.Password />
//               </Form.Item>
//               <Form.Item name="role" label="Role" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {roles.map((role) => (
//                     <Option key={role.id} value={role.name}>
//                       {role.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item name="department" label="Department" rules={[{ required: true }]} hasFeedback>
//                 <Select>
//                   {departments.map((department) => (
//                     <Option key={department.id} value={department.name}>
//                       {department.name}
//                     </Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//               <Form.Item>
//                 <Button type="primary" htmlType="submit" loading={loading}>
//                   Signup
//                 </Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;











