'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'
import { FaFacebook } from "react-icons/fa";

const SignOut = () => {
  return (
    <div className="p-8">
        <Button onClick={() => signOut()}  className="px-28 py-5 text-lg" variant={'destructive'}><FaFacebook/>SignOut</Button>
        <div className="mt-7 flex items-center justify-center">
        <p>or</p>
      </div>
    </div>
  )
}

export default SignOut