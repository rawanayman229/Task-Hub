import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

// 1. Define the Zod schema for validation
const signUpSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string(),
    terms: z.boolean().refine(val => val === true, {
        message: 'You must accept the Terms of Service and Privacy Policy',
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the error on the confirmPassword field
});

// 2. Create a TypeScript type from the schema
type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUpPage: React.FC = () => {
    // 3. Set up react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });

    // 4. Handle form submission
    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Account created:', data);
        alert(`Account for ${data.firstName} created successfully!`);
    };

    // Helper function for input classes
    const getInputClasses = (fieldName: keyof SignUpFormData) => 
        `w-full px-4 py-2 bg-slate-50 border-1 rounded-lg focus:outline-none focus:ring-2 ${
            errors[fieldName] ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500'
        }`;

    return (
        <div className="bg-slate-100 min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 max-w-lg w-full">
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                    <div className="flex flex-col items-center mb-6">
                        <Link to="/" className="flex items-center gap-1 text-xl font-bold">
                        <ClipboardList className="text-sky-500" />
                        <span className="text-sky-500">TaskHub</span>
                        </Link>
                        </div>
                
                    <h1 className="text-3xl font-bold text-slate-700">Create Account</h1>
                    <p className="text-slate-500 mt-1">Join Task Hub to manage your projects</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* First and Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                            <input id="firstName" type="text" placeholder="John" {...register('firstName')} className={getInputClasses('firstName')} />
                            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                            <input id="lastName" type="text" placeholder="Doe" {...register('lastName')} className={getInputClasses('lastName')} />
                            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                        <input id="email" type="email" placeholder="Enter your email" {...register('email')} className={getInputClasses('email')} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password"  className="block text-sm font-medium text-slate-700 mb-1">Password</label>
                        <input id="password" type="password" placeholder="Create a password" {...register('password')} className={getInputClasses('password')} />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword"  className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
                        <input id="confirmPassword" type="password" placeholder="Confirm your password" {...register('confirmPassword')} className={getInputClasses('confirmPassword')} />
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" {...register('terms')} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-slate-600">
                                I agree to the{' '}
                                <Link to="/terms" className="font-semibold text-slate-800 hover:text-blue-600">Terms of Service</Link> and{' '}
                                <Link to="/privacy" className="font-semibold text-slate-800 hover:text-blue-600">Privacy Policy</Link>
                            </label>
                            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 cursor-pointer rounded-lg transition-colors disabled:bg-slate-500 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                {/* Sign In Link */}
                <p className="mt-6 text-center text-sm text-slate-600">
                    Already have an account?{' '}
                    <Link to="/signin" className="font-semibold text-slate-800 hover:text-blue-600">Sign in</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;