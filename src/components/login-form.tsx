"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { login } from "@/lib/actions/auth";
    
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = () => email.length > 0 && password.length > 0;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent traditional form submission
        handleLogin();
    };

    const handleLogin = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            await login ({ email, password });
            console.log("Logged in successfully");
        } catch (err:any) {
            console.log(err.message);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader>
                    <CardTitle className="mb-2">Login</CardTitle>
                    <CardDescription>Login with an existing account.</CardDescription>
                </CardHeader>
                <CardContent>

                    <Label htmlFor="loginEmail" className="mb-3">Email</Label>
                    <Input 
                      id="loginEmail" 
                      placeholder="xyz@email.com" 
                      className="border-yellow-200 mb-4 mt-1"
                      type="email"
                      autoComplete="email"
                      autoCorrect="off"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>

                    <Label htmlFor="loginPassword" className="mb-3">Password</Label>
                    <Input 
                      id="loginPassword" 
                      placeholder="Password" 
                      className="border-yellow-200 mb-4 mt-1"
                      type="password"
                      autoComplete="password"
                      autoCorrect="off"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Input>

                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button disabled={!isFormValid()} onClick={handleLogin}>Login</Button>
                </CardFooter>
            </Card>
        </form>
    )
}