import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Authentication() {
  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <Tabs defaultValue="signUp" className="w-[400px] m-4">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900">
          <TabsTrigger value="signUp">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signUp">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Complete the details given below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input id="name" type="email" required />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input id="username" type="password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create Account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Fill your credentials to login</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  id="current"
                  type="email"
                  defaultValue="PedroDuarte@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  id="new"
                  type="password"
                  defaultValue="@peduarte"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
