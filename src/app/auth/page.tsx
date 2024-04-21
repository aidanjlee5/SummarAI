import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import SignUpForm from "@/components/signup-form";
import LoginForm from "@/components/login-form";

export default function Auth() {
    return (
        <body>
            <div className="flex flex-row">
                <div>
                    <img src='./SummarAILogo.svg' alt='SummarAI Logo' className='object-contain h-10 w-full size-10/12 mt-8 ml-4' />
                </div>
            
                <div className="ml-24 mt-28">
                    <Tabs defaultValue="register" className="w-[500px]">
                        <TabsList className="grid grid-cols-2 w-full bg-yellow-200">
                            <TabsTrigger value="register">Register</TabsTrigger>
                            <TabsTrigger value="login">Login</TabsTrigger>
                        </TabsList>
                        <TabsContent value="register">
                            <SignUpForm />
                        </TabsContent>

                        <TabsContent value="login">
                            <LoginForm />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </body>
    );
}