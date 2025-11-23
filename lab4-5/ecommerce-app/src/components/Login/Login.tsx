import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react'; 
import Swal from 'sweetalert2';

type LoginInputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login = () => {
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginInputs>();

  const onSubmit = async (data: LoginInputs) => {
// stimulation for login
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Login Data:", data);
// axios is supposed to be here
    Swal.fire({
      icon: 'success',
      title: 'Welcome Back!',
      text: 'You have successfully logged in.',
      timer: 1500,
      showConfirmButton: false
    }).then(() => {

        navigate('/');
    });
  };

  return (
    <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-gray-50 py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        
        <div className="bg-blue-600 p-8 text-center">
          <div className="mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
            <LogIn className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-blue-100">Sign in to continue to Ecommerce Store</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition
                  ${errors.email 
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                    : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500'
                  }`}
                placeholder="name@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
              </div>
              
              <div className="relative">
                <input 
                  {...register("password", { required: "Password is required" })}
                //   changing vislable non visalble
                  type={showPassword ? "text" : "password"} 
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition pr-10
                    ${errors.password 
                      ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
                      : 'border-gray-200 focus:ring-blue-100 focus:border-blue-500'
                    }`}
                  placeholder="••••••••"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>

            <div className="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                {...register("rememberMe")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 
              rounded-lg font-bold hover:bg-blue-700 transition 
              transform active:scale-[0.98] disabled:opacity-70 d
              isabled:cursor-not-allowed shadow-lg shadow-blue-600/20"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-blue-600 hover:text-blue-700 hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;