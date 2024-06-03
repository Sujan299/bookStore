import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div>
            <div id="my_modal_4" className="flex h-screen justify-center items-center ">
                <div className="w-[600px]">
                    <div className='modal-box dark:bg-slate-900 dark:text-white'>
                        <form method="dialog" onSubmit={handleSubmit((data) => {
                        console.log(data)
                    })}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to='/'>✕</Link>
                            <h3 className="font-bold text-lg mb-5">Signup</h3>
                            <div className='space-y-5'>
                                <h1>Username:</h1><input className='dark:bg-slate-900 dark:text-white px-2 py-1 rounded-md outline-none' type='text' placeholder="sujan123" {...register("name", { required: true })} />
                                <br></br>   {errors.name && <span className='text-pink-500'>This field is required</span>}
                            </div>
                            <div className='space-y-5'>
                                <h1>Email:</h1><input className='dark:bg-slate-900 dark:text-white px-2 py-1 rounded-md outline-none' type='email' placeholder="sujan@gmail.com" {...register("email",{ pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ } ,{ required: true })} />
                                <br></br>   {errors.email && <span className='text-pink-500'>This field is required</span>}

                            </div>
                            <div className='space-y-5 mt-5'>
                                <h1>Password:</h1><input className='dark:bg-slate-900 dark:text-white px-2 py-1 rounded-md outline-none' type='password' placeholder="****" {...register("password", { required: true })} />
                                <br></br>   {errors.password && <span className='text-pink-500'>This field is required</span>}

                            </div>
                            <div className='flex justify-between mt-5'>
                                <button className='bg-pink-500 py-1 px-2 rounded-lg text-white hover:bg-pink-700 duration-300'>Signup</button>
                                <p>Have an account ? <button className="text-blue-500 underline" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                                    <Login /></p>
                            </div>
                        </form>

                    </div>
                </div></div>
        </div>
    )
}

export default Signup