import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import SignUpForm from "@/components/signup-form";

export default function Auth() {
    return (
        <div className="flex flex-row">
            <div>
                <h1 className="font-petrona italic top-0 left-0 p-8 text-5xl">SummarAI</h1>
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
                        <Card>
                            <CardHeader>
                                <CardTitle className="mb-2">Login</CardTitle>
                                <CardDescription>Login with an existing account.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Label htmlFor="loginEmail" className="mb-3">Email</Label>
                                <Input id="loginEmail" placeholder="xyz@email.com" className="border-yellow-200 mb-4 mt-1"></Input>

                                <Label htmlFor="loginPassword" className="mb-3">Password</Label>
                                <Input id="loginPassword" placeholder="Password" className="border-yellow-200 mb-4 mt-1"></Input>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button>Login</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}