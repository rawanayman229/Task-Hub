import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

// 1. Define the Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }), // min(1) ensures it's not empty
});

// 2. Create a TypeScript type from the schema
type LoginFormData = z.infer<typeof loginSchema>;


const SignInPage: React.FC = () => {
  // 3. Set up react-hook-form with the Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // 4. Handle form submission
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data:', data);
        alert(`Signed in with email: ${data.email}`);
        resolve(data);
      }, 1000);
    });
  };
  

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 max-w-md w-full">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
         <Link to="/" className="flex items-center gap-1 text-xl font-bold">
                     <ClipboardList className="text-sky-500" />
                    <span className="text-sky-500">TaskHub</span>
                   </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              className={`w-full px-4 py-2 bg-slate-50 text-slate-500 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register('password')}
              className={`w-full px-4 py-2 bg-slate-50 text-slate-500 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'
              }`}
            />
             {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
          
          <div className="text-right">
             <Link to="/forgot-password" className="text-sm font-medium text-slate-600 hover:text-blue-600">
               Forgot password?
             </Link>
           </div>


          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 cursor-pointer rounded-lg transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-semibold text-slate-800 hover:text-blue-600"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;