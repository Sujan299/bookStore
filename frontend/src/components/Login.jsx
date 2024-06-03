import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" to='/' onClick={() => document.getElementById('my_modal_3').close()}>✕</Link>

                    </form>

                    <h3 className="font-bold text-lg mb-5">Login</h3>

                    <div className='space-y-5'>
                        <h1>Email:</h1><input className='px-2 py-1 rounded-md outline-none' type='email' placeholder="sujan@gmail.com" {...register("email",{ pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ } ,{ required: true })} />
                        <br/>{errors.email && <span className='text-pink-500'>This field is required</span>}
                    </div>
                    <div className='space-y-5 mt-5'>
                        <h1>Password:</h1><input className='px-2 py-1 rounded-md outline-none' type='password' placeholder="****" {...register("password", { required: true })} />
                        <br/>{errors.password && <span className='text-pink-500'>This field is required</span>}
                    </div>
                    <div className='flex justify-between mt-5'>
                        <form action="" onClick={handleSubmit((data) => {
                            console.log(data)
                        })}>
                            <button className='bg-pink-500 py-1 px-2 rounded-lg text-white hover:bg-pink-700 duration-300'>Login</button>

                        </form>
                        <p>Create an account ? <Link to='/signup' className="text-blue-500 underline" onClick={() => document.getElementById("my_modal_4").showModal()}>Signup</Link></p>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Login;