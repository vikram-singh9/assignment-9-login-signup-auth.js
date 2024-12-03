'use client'

import { useState } from "react"
import { Input } from "../ui/input"
import {Button} from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"



const SignupForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('SignUp Attempt with:', {email, password})

    }

    return (
       <Card className="w-[400px] h-[330px]">
        <CardHeader>
            <CardTitle>SignUp</CardTitle>
            <CardDescription>Enter your Credentials to create your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-7">
                <div className="space-y-2">
                    
                    <Input 
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                     />
                </div>
                <div className="space-y-2">
                    <Input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />

                </div>
                <div className="space-y-2">
                    <Input 
                    type="password"
                    placeholder="Confirm Password"
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />

                </div>
                <Button type="submit" className="w-full" onClick={() => alert('Signup Successfully')}>
                    SignUp
                </Button>
                
            </form>
        </CardContent>
       </Card>
    )
}

export default SignupForm