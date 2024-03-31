import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"

export default function Welcome() {
    return (
        <div className="bg-yellow-200">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <Card className="w-[200px] mt-8 ml-8">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                    <Card className="w-[200px] mt-16 ml-28">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                </div>

                <div className="flex flex-col items-center mx-16 justify-center relative overflow-hidden h-dvh">
                    <Card className="w-[200px] absolute bottom-[575px]">
                        <CardHeader>
                            <CardTitle className="text-gray-500 text-base">Glencore's emmissions rose ~9% in 2023</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">Global commodities giant Glencore reported emissions surged by approximately 9% compared to the previous year.</CardDescription>
                        </CardHeader>
                    </Card>
                    <h1 className="text-3xl mb-3 font-bold">SummarAI</h1>
                    <h1 className="text-6xl italic mb-7">Get the Scoop<br></br>in Seconds</h1>
                    <Button className="bg-cyan-200 hover:bg-cyan-300 font-bold">Unlock Insights</Button>
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