import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center '>
            <div className='bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700'>
                <div className='bg-gray-900 py-8 px-8 text-center border-b border-gray-700'>
                    <h1 className='text-3xl font-bold text-emerald-400'>Employee Task Tracker</h1>
                    <p className='text-gray-400 mt-2'>Sign in to access your dashboard</p>
                </div>
                  
                <form onSubmit={submitHandler} className='p-8 space-y-6'>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-300 mb-2'>
                            Email Address
                        </label>
                        <input 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-white placeholder-gray-400'
                            type="email" 
                            placeholder='your.email@example.com' 
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-300 mb-2'>
                            Password
                        </label>
                        <input
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-white placeholder-gray-400'
                            type="password" 
                            placeholder='••••••••' 
                        />
                    </div>

                    <div className='pt-4'>
                        <button 
                            type='submit'
                            className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-lg hover:shadow-emerald-500/20'
                        >
                            Log In
                        </button>
                    </div>

                    <div className='text-center text-sm text-gray-400'>
                        <p>Don't have an account? <span className='text-emerald-400 hover:underline cursor-pointer'>Contact admin</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login