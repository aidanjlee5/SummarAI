import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Auth() {
    return (
        <body>
            <div className="flex flex-row">
                <div>
                    <img src='./SummarAILogo.svg' alt='SummarAI Logo' className='object-contain h-10 w-full size-10/12 mt-8 ml-4' />
                </div>
                <div className="flex flex-col ml-10">
                    <h1 className="text-3xl font-extrabold mt-48 mb-10">Create An Account</h1>
                    <div className="flex flex-col items-center">
                        <Input className="mb-5 border-yellow-400" placeholder="Full Name" />
                        <Input className="mb-5 border-yellow-400" placeholder="Email" />
                        <Input className="mb-5 border-yellow-400" placeholder="Create Password" />
                        <Input className="mb-5 border-yellow-400" placeholder="Confirm Password" />
                        <Button>Register</Button>
                    </div>
                </div>
                <div className="flex flex-col items-center ml-32">
                    <h1 className="text-3xl font-extrabold mt-48 mb-10">Login</h1>
                    <div className="flex flex-col items-center">
                        <Input className="mb-5 border-yellow-400" placeholder="Email" />
                        <Input className="mb-5 border-yellow-400" placeholder="Password" />
                        <Button>Login</Button>
                    </div>
                </div>
            </div>
        </body>
    );
}