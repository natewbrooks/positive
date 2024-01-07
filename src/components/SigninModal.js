import React, { useState } from 'react';
import Modal from './Modal';

export default function SigninModal({ isModalOpen, setModalOpen, closeModal, showSignin }) {
	const [registerShown, setRegisterShown] = useState(!showSignin);

	return (
		<Modal isOpen={isModalOpen} onClose={closeModal}>
			<div className='flex flex-col space-y-4 w-full h-full justify-center items-center'>
				{!registerShown && (
					<>
						<div className='flex flex-col text-center'>
							<span className='serif text-xl'>Sign in</span>
						</div>
						<form className='flex flex-col justify-start space-y-8 items-center'>
							<div className='flex flex-col space-y-2'>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Email</span>
									<input
										type='email'
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Password</span>
									<input
										type='text'
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									<span className='text-end sans text-sm xbold select-none cursor-pointer active:scale-95 text-dark/50 hover:opacity-50'>
										Forgot password?
									</span>
								</div>
							</div>
							<div className='hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans text-sm w-[50%] rounded-md'>
								SUBMIT
							</div>
						</form>
						<div className='justify-center flex space-x-2 w-full border-t-2 border-dark/10 pt-5'>
							<span className='text-sm sans'>Don't have an account?</span>
							<span
								onClick={() => setRegisterShown(true)}
								className='hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm sans xbold border-b-2  border-dark/10'>
								REGISTER NOW
							</span>
						</div>
					</>
				)}

				{registerShown && (
					<>
						<div className='flex flex-col text-center'>
							<span className='serif text-xl'>Register Account</span>
						</div>
						<form className='w-fit flex flex-col justify-center space-y-8 items-center'>
							<div className='w-[60%] flex flex-col space-y-2'>
								<div className='flex space-x-2 justify-evenly'>
									<div className='flex flex-col'>
										<span className='sans text-sm text-dark'>First Name</span>
										<input
											type='text'
											className='select-none w-full bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									</div>
									<div className='flex flex-col'>
										<span className='sans text-sm text-dark'>Last Name</span>
										<input
											type='text'
											className='select-none w-full bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
									</div>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Email</span>
									<input
										type='text'
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Phone Number</span>
									<input
										type='text'
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
								<div className='flex flex-col'>
									<span className='sans text-sm text-dark'>Password</span>
									<input
										type='text'
										className='select-none bg-dark/10 rounded-md text-dark placeholder:text-dark py-1 px-2 sans'></input>
								</div>
							</div>
							<div className='hover:opacity-50 active:scale-95 cursor-pointer xbold text-center select-none bg-dark text-light p-1 items-center flex justify-center sans text-sm w-[40%] rounded-md'>
								CREATE ACCOUNT
							</div>
						</form>
						<div className='justify-center md:justify-start flex space-x-2 w-full border-t-2 border-dark/10 pt-5'>
							<span className='text-sm sans'>Already have an account?</span>
							<span
								onClick={() => setRegisterShown(false)}
								className='hover:opacity-50 cursor-pointer select-none active:scale-95 text-sm sans xbold border-b-2  border-dark/10'>
								SIGN IN
							</span>
						</div>
					</>
				)}
			</div>
		</Modal>
	);
}
