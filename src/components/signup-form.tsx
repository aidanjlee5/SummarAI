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
import { signup } from "@/lib/actions/auth";
import { toast } from "sonner";

export default function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isFormValid = () => email.length > 0 && password.length > 0 && password === confirmPassword;

    const handleSignup = async (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        try {
            await signup({ email, password });
            console.log("Check your email to verify your account");
        } catch (err: any) {
            console.log(err.message);
        } 
    }

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle className="mb-2">Register</CardTitle>
          <CardDescription>Create a new account here.</CardDescription>
        </CardHeader>
        <CardContent>

          <Label htmlFor="registerEmail">Email</Label>
          <Input
            id="registerEmail"
            placeholder="xyz@email.com"
            className="border-yellow-200 mb-4 mt-1"
            type="email"
            autoComplete="email"
            autoCorrect="off"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>

          <Label htmlFor="createPassword">Create Password</Label>
          <Input
            id="createPassword"
            placeholder="Password must be at least 8 characters"
            className="border-yellow-200 mb-4 mt-1"
            type="password"
            autoComplete="password"
            autoCorrect="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="Confirm Password"
            className="border-yellow-200 mb-4 mt-1"
            type="password"
            autoComplete="password"
            autoCorrect="off"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Input>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button disabled={!isFormValid()} onClick={handleSignup}>Create Account</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
