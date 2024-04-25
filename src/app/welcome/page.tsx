import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
//import Logo from "./summarAI_logo.svg"
import Link from 'next/link'

export default function Welcome() {
    return (
        <div className="bg-yellow-200 w-full">
            <div className="grid grid-cols-3">
                <div className="flex flex-col items-end">
                    <Card className="w-[200px] mt-8 mr-16">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Russia to Limit Naval Movement Near Ukraine Amid Tensions</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Russia has announced restrictions on naval movement in parts of the Black Sea and the Sea of Azov near Ukraine, citing military exercises and heightened tensions.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[200px] mt-16 mr-24">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Explosion at a chemical plant in Ohio</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">A chemical plant in Ohio experienced an explosion, resulting in a fire that caused significant damage to the facility.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="flex flex-col items-center justify-center relative overflow-hidden h-dvh">
                    <Card className="w-[200px] absolute bottom-[575px]">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore&apos;s emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>

                    <img src='summarAILogo.svg' alt='SummarAI Logo' className='w-10/12 h-10 object-contain mb-2' />
                    <h1 className="text-6xl italic mb-7">Get the Scoop<br></br>in Seconds</h1>
                    <Link href="/auth">
                        <Button className="bg-cyan-200 hover:bg-cyan-300 font-bold">Unlock Insights</Button>
                    </Link>
                    <Card className="w-[200px] absolute top-[550px] mr-20">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Jayden Daniels aims to be the greatest running quarterback in NFL history</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Jayden Daniels aspires to surpass Michael Vick, Lamar Jackson, Cam Newton, Randall Cunningham, and Steve Young as the greatest running quarterback in NFL history by leveraging his remarkable running abilities and football IQ.</CardDescription>
                        </CardHeader>
                    </Card> 
                </div>

                <div className="flex flex-col">
                    <Card className="w-[200px] mt-10 ml-12">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">U.S. Senate Passes Bill That Could Lead to TikTok Ban</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">The U.S. Senate passed a bill that includes a provision potentially banning TikTok in the U.S. if its Chinese owner, ByteDance, doesn't sell its stake within a year.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[200px] mt-28">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Iowa State Moves Up to No. 3 in Preseason Top 25 College Basketball Rankings</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Iowa State has climbed to No. 3 in the 2024-25 CBS Sports preseason rankings after Joshua Jefferson's commit.</CardDescription>
                        </CardHeader>
                    </Card>      
                </div>
            </div>
        </div>
    );
}