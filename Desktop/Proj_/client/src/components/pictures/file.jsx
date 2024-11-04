// import React from 'react';
// import { Form, Input, Select, Button, message } from 'antd';
// import axios from 'axios';
// import './Signup.css';  // Add CSS styles

// const { Option } = Select;

// const Signup = () => {
  
//   const [form] = Form.useForm();

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post('/api/auth/signup', values);
//       if (response.data.success) {
//         message.success('Signup successful! Check your email for verification.');
//       }catch (error) {
//       message.error(error.response.data.message || 'Signup failed!');
//       }}}
//   };

//   return (
//     <div className="signup-container">
//       {/* Left side with image */}
//       <div className="signup-image">
//         <img src="\src\components\pictures\collab-pic.webp" alt="Team Collaboration" />
//       </div>
//       <div className="signup-page">
//        <div className="signup-form-container">
//          <div className="header">
//            <img src="\src\components\pictures\logo.jpg" alt="App Logo" className="logo" />
          
//            <h1 className="app-name"> Signup </h1>
//          </div>
        

//       {/* Right side with form */}
//       <div className="signup-form">
//         <h2>SignUp</h2>
//         <Form form={form} onFinish={onFinish} layout="vertical">
//           <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]}>
//             <Input.Password />
//           </Form.Item>
//           <Form.Item name="role" label="Role" rules={[{ required: true }]}>
//             <Select>
//               <Option value="Supervisor">Supervisor</Option>
//               <Option value="Student">Student</Option>
//               <Option value="Admin">Admin</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item name="department" label="Department" rules={[{ required: true }]}>
//             <Select>
//               <Option value="CS">CS</Option>
//               <Option value="IT">IT</Option>
//               <Option value="EE">EE</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">Signup</Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Signup;












// src/components/SignupForm.jsx

// import React, { useState } from 'react';
// import { Form, Input, Button, Select, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'antd/dist/reset.css';
// import './SignupForm.css';

// const { Option } = Select;

// const SignupForm = () => {
//   const [role, setRole] = useState('');
//   const [department, setDepartment] = useState('');
//   const navigate = useNavigate();

//   const handleRoleChange = (value) => {
//     setRole(value);
//   };

//   const handleDepartmentChange = (value) => {
//     setDepartment(value);
//   };

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', values);
//       message.success(response.data.message);
//       navigate('/login');
//     } catch (error) {
//       message.error('Error signing up. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-form-container">
//         <div className="header">
//           <img src="\src\components\pictures\logo.jpg" alt="App Logo" className="logo" />
          
//           <h1 className="app-name"> Signup </h1>
//         </div>
        
//         <Form
//           name="signup"
//           onFinish={onFinish}
//           layout="vertical"
//           className="signup-form"
//         >
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: 'Please enter your name!' }]}
//           >
//             <Input />
//           </Form.Item>

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

//           <Form.Item
//             label="Role"
//             name="role"
//             rules={[{ required: true, message: 'Please select a role!' }]}
//           >
//             <Select onChange={handleRoleChange}>
//               <Option value="Supervisor">Supervisor</Option>
//               <Option value="Student">Student</Option>
//             </Select>
//           </Form.Item>

//           {role === 'Supervisor' && (
//             <Form.Item
//               label="Department"
//               name="department"
//               rules={[{ required: true, message: 'Please select your department!' }]}
//             >
//               <Select onChange={handleDepartmentChange}>
//                 <Option value="Computer Science">Computer Science</Option>
//                 <Option value="Electrical Engineering">Electrical Engineering</Option>
//               </Select>
//             </Form.Item>
//           )}

//           {role === 'Student' && (
//             <>
//               <Form.Item
//                 label="Department"
//                 name="department"
//                 rules={[{ required: true, message: 'Please select your department!' }]}
//               >
//                 <Select onChange={handleDepartmentChange}>
//                   <Option value="Computer Science">Computer Science</Option>
//                   <Option value="Electrical Engineering">Electrical Engineering</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item
//                 label="Semester"
//                 name="semester"
//                 rules={[{ required: true, message: 'Please enter your semester!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Roll Number"
//                 name="rollno"
//                 rules={[{ required: true, message: 'Please enter your roll number!' }]}
//               >
//                 <Input />
//               </Form.Item>
//             </>
//           )}

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Signup
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;

// // import React, { useState } from 'react';
// import { Form, Input, Button, Select, message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'antd/dist/reset.css';
// import './SignupForm.css';

// const { Option } = Select;

// const SignupForm = () => {
//   const [role, setRole] = useState('');
//   const navigate = useNavigate();

//   const handleRoleChange = (value) => {
//     setRole(value);
//   };

//   const onFinish = async (values) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', values);
//       message.success(response.data.message);
//       navigate('/login');
//     } catch (error) {
//       message.error('Error signing up. Please try again.');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-form-container">
//         <div className="header">
//           <img src="pictures\logo.jpg" alt="App Logo" className="logo" />
//           <h1 className="app-name"> Signup </h1>
//         </div>
//         <Form
//           name="signup"
//           onFinish={onFinish}
//           layout="vertical"
//           className="signup-form"
//         >
//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: 'Please enter your name!' }]}
//           >
//             <Input />
//           </Form.Item>

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

//           <Form.Item
//             label="Role"
//             name="role"
//             rules={[{ required: true, message: 'Please select a role!' }]}
//           >
//             <Select onChange={handleRoleChange}>
//               <Option value="Supervisor">Supervisor</Option>
//               <Option value="Student">Student</Option>
//             </Select>
//           </Form.Item>

//           {role === 'Supervisor' && (
//             <Form.Item
//               label="Department"
//               name="department"
//               rules={[{ required: true, message: 'Please select your department!' }]}
//             >
//               <Select>
//                 <Option value="Computer Science">Computer Science</Option>
//                 <Option value="Electrical Engineering">Electrical Engineering</Option>
//               </Select>
//             </Form.Item>
//           )}

//           {role === 'Student' && (
//             <>
//               <Form.Item
//                 label="Department"
//                 name="department"
//                 rules={[{ required: true, message: 'Please select your department!' }]}
//               >
//                 <Select>
//                   <Option value="Computer Science">Computer Science</Option>
//                   <Option value="Electrical Engineering">Electrical Engineering</Option>
//                 </Select>
//               </Form.Item>

//               <Form.Item
//                 label="Semester"
//                 name="semester"
//                 rules={[{ required: true, message: 'Please enter your semester!' }]}
//               >
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 label="Roll Number"
//                 name="rollno"
//                 rules={[{ required: true, message: 'Please enter your roll number!' }]}
//               >
//                 <Input />
//               </Form.Item>
//             </>
//           )}

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Signup
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;


/* src/components/SignupForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/reset.css';
import './SignupForm.css';

const { Option } = Select;

const SignupForm = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="signup-page">
      <div className="image-container">
        <img src="src\collab-pic.webp" alt="Animated" className="animated-image" />
      </div>
      <div className="signup-form-container">
        <div className="header">
          <img src="src\logo.jpg" alt="App Logo" className="logo" />
          <h1 className="app-name">SignUp</h1>
        </div>
        <Form
          name="signup"
          onFinish={onFinish}
          layout="vertical"
          className="signup-form"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: 'Please select a role!' }]}
          >
            <Select onChange={handleRoleChange}>
              <Option value="Supervisor">Supervisor</Option>
              <Option value="Student">Student</Option>
            </Select>
          </Form.Item>

          {role === 'Supervisor' && (
            <Form.Item
              label="Department"
              name="department"
              rules={[{ required: true, message: 'Please select your department!' }]}
            >
              <Select>
                <Option value="Computer Science(CS)">Computer Science</Option>
                <Option value="Information Technology(IT)">Electrical Engineering</Option>
              </Select>
            </Form.Item>
          )}

          {role === 'Student' && (
            <>
              <Form.Item
                label="Department"
                name="department"
                rules={[{ required: true, message: 'Please select your department!' }]}
                requiredMrak={false}
              >
                <Select>
                  <Option value="Computer Science(CS)">Computer Science</Option>
                  <Option value="Information Technology(IT)">Information Technology</Option>
                  <Option value="Software Engineering(SE)">Software Engineering</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Semester"
                name="semester"
                rules={[{ required: true, message: 'Please enter your semester!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Roll Number"
                name="rollno"
                rules={[{ required: true, message: 'Please enter your roll number!' }]}
              >
                <Input />
              </Form.Item>
            </>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;

*/






/* src/components/SignupForm.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/reset.css';
import './SignupForm.css'; // Custom styling

const { Option } = Select;

const SignupForm = () => {
  const [role, setRole] = useState('');

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
     <div className="signup-form-container">
      <div className="header">
        <img src='./logo2.png' alt="App Logo" className="logo" />
        <h1 className="app-name">SignUp</h1>
      </div>
      <Form
        name="signup"
        onFinish={onFinish}
        layout="vertical"
        className="signup-form"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select a role!' }]}
        >
          <Select onChange={handleRoleChange}>
            <Option value="Supervisor">Supervisor</Option>
            <Option value="Student">Student</Option>
          </Select>
        </Form.Item>

        {role === 'Supervisor' && (
          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: 'Please select your department!' }]}
          >
            <Select>
              <Option value="Computer Science(CS)">Computer Science</Option>
              <Option value="Information Technology(IT)">Information Technology</Option>
            </Select>
          </Form.Item>
        )}

        {role === 'Student' && (
          <>
            <Form.Item
              label="Department"
              name="department"
              rules={[{ required: true, message: 'Please select your department!' }]}
            >
              <Select>
                <Option value="Computer Science(CS)">Computer Science</Option>
              <Option value="Information Technology(IT)">Information Technology</Option>
                <Option value="Software Engineering(SE)">Software Engineering</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Semester"
              name="semester"
              rules={[{ required: true, message: 'Please enter your semester!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Roll Number"
              name="rollno"
              rules={[{ required: true, message: 'Please enter your roll number!' }]}
            >
              <Input />
            </Form.Item>
          </>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignupForm;
*/