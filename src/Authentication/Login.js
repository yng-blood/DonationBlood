import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ Email: email, Password: password }),
//       });
  
//       if (!response.ok) {
//         // Handle non-OK responses
//         console.error('Error during login:', response.statusText);
//         return;
//       }
  
//       const data = await response.json();
//       console.log(data); // Adjust as needed
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };
  

  return (
    <div>
      


      <h2>Login</h2>
      <label htmlFor="email" className="text_head" >Email:</label>
{/* <input type="email" id="email" placeholder="eg@gits.com" required className="inputfield" value={email} onChange={(e) => setEmail(e.target.value)} required:true /> */}

<label htmlFor="email" className="text_head" >Password:</label>
{/* <input type="password" id="password" placeholder="********" required value={password} onChange={(e) => setPassword(e.target.value)} required:true /> */}



      {/* <button type="button" onClick={handleLogin}>Login</button> */}

      <div>
      <Link to="/Signup">Not  registered? Signin</Link>
      </div>
    </div>
  );
};

export default Login;
