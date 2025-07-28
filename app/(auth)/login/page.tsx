import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GithubIcon } from "lucide-react";

export default function LoginPage() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Welcome back!</CardTitle>
                    <CardDescription>Login with your Github Account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="w-full" variant={"outline"}>
                    <GithubIcon className="size-4" />
                        Sign in with GitHub
                    </Button>
                </CardContent>
             </Card>
        </div>
    )
}