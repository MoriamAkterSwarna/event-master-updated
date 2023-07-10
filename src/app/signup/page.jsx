import React from 'react';
import SignUpForm from './signupForm';

const SignUpPage = () => {
    return (
        <div className="login-bg">
        <div className="py-10">
          <div className="bg-white w-1/2 mx-auto px-6 py-10 rounded-lg">
            <h2 className="text-5xl font-bold text-center text-orange-500">
              Sign Up
            </h2>
  
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mt-6 mb-12 mx-auto">
              <SignUpForm></SignUpForm>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUpPage;