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
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[200px] mt-16 mr-24">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="flex flex-col items-center justify-center relative overflow-hidden h-dvh">
                    <Card className="w-[200px] absolute bottom-[575px]">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>

                    <div className="font-petrona italic p-4 text-5xl">SummarAI</div>
                    <h1 className="text-6xl italic mb-7">Get the Scoop<br></br>in Seconds</h1>
                    <Link href="/auth">
                        <Button className="bg-cyan-200 hover:bg-cyan-300 font-bold">Unlock Insights</Button>
                    </Link>
                    <Card className="w-[200px] absolute top-[550px] mr-20">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card> 
                </div>

                <div className="flex flex-col">
                    <Card className="w-[200px] mt-10 ml-12">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[200px] mt-28">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>      
                </div>
            </div>
        </div>
    );
}