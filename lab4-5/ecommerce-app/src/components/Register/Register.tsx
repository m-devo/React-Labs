import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    // only characters and spaces
    const nameRegex = /^[a-zA-Z\s]+$/;
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Password one capital letter one small letter, special char, and 8 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // no spaces iin user name
    if (name === 'username' && value.includes(' ')) return;
    
    setFormData({ ...formData, [name]: value });
    // upon writing delete the error
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

if (!formData.name.trim()) {
        newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
        newErrors.name = "Name must be at least 3 characters";
    } else if (!nameRegex.test(formData.name)) {
        newErrors.name = "Name must contain letters only (No numbers or symbols)";
    }

    if (!formData.email) {
        newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
    }

    if (!formData.username) newErrors.username = "Username is required";

    if (!formData.password) {
        newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
        newErrors.password = "Password must be 8+ chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char";
    }

    if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // checking all errors
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Success Logic
      alert(JSON.stringify(formData, null, 2));
      navigate('/'); // main page
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-150px)] bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              type="text" name="name" value={formData.name} onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="text" name="email" value={formData.email} onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2
                 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username (No spaces)</label>
            <input 
              type="text" name="username" value={formData.username} onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.username ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" name="password" value={formData.password} onChange={handleChange}
              placeholder="e.g., P@ssword1234"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none 
                focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input 
              type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${errors.confirmPassword ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'}`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="mt-4 bg-green-600 text-white py-2 rounded-lg f
          ont-bold hover:bg-green-700 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;