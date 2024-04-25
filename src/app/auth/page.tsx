import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import SignUpForm from "@/components/signup-form";
import LoginForm from "@/components/login-form";

export default function Auth() {
    return (
        <div className="w-screen h-screen flex flex-col relative justify-center items-center">
            <div>
                <div className="absolute top-5 left-5">
                    <img src='./SummarAILogo.svg' alt='SummarAI Logo' className='w-full object-contain h-10 size-10/12' />
                </div>
            
                <div className="w-full">
                    <Tabs defaultValue="register" className="w-[500px]">
                        <TabsList className="grid grid-cols-2 w-full bg-yellow-200">
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="login">Login</TabsTrigger>
                        </TabsList>
                        <div className="h-auto min-h-[500px]">
                            <TabsContent value="register">
                                <SignUpForm />
                            </TabsContent>

                            <TabsContent value="login">
                                <LoginForm />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}