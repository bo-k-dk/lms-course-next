import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Account</CardDescription>
      </CardHeader>
    </Card>
  );
}