import React from "react";
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
import { useToast } from "@/components/ui/use-toast";

// API Function
// import { CreateUser, LoginUser, createUserWithGoogle } from "@/api/UserAuth";
import { CreateUser, LoginUser } from "@/api/UserAuth";
import { useNavigate } from "react-router-dom";


export default function Authentication() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { toast } = useToast();
  const navigate = useNavigate()

  const handleCreate = async (email: string, password: string) => {
    if (email !== "" && password !== "") {
      const resp = await CreateUser(email, password);
      if (resp.value) {
        toast({
          title: "User Registered",
        });
        navigate('/dashboard')
      } else {
        toast({
          title: "Something Went Wrong",
          description: `${resp.message}`,
        });
      }
      setEmail("");
      setPassword("");
      return;
    }
    toast({
      title: "Incomplete Details",
      description: "Please Filled All the Details",
    });
  };

  // const handleCreateWithGoogle = async () => {
  //   const resp = await createUserWithGoogle();
  //   if (resp.value) {
  //     toast({
  //       title: "User Registered",
  //     });
  //     navigate('/dashboard')
  //   } else {
  //     toast({
  //       title: "Something Went Wrong",
  //       description: "Unable to Sign in with Google please select Other Method",
  //     });
  //   }
  // };


  const handleLogin = async (email: string, password: string) => {
    if (email !== "" && password !== "") {
      const resp = await LoginUser(email, password);
      if (resp.value) {
        toast({
          title: "Login Successfull",
        });
        navigate('/dashboard')
      } else {
        toast({
          title: "Something Went Wrong",
          description: `${resp.message}`,
        });
      }
      setEmail("");
      setPassword("");
      return;
    }
    toast({
      title: "Incomplete Credentials",
      description: "Please Filled All the Details",
    });
  };

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center">
      <Tabs defaultValue="signIn" className="w-[400px] m-4">
        <TabsList className="grid w-full grid-cols-2 bg-gray-900">
          <TabsTrigger value="signIn">Sign In</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signIn">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Complete the details given below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  id="name"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  id="username"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs">Default Login credentials are provided in login tab</p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button onClick={() => handleCreate(email, password)}>
                Create Account
              </Button>
              {/* <Button onClick={handleCreateWithGoogle}>
                Sign In with Google
              </Button> */}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  id="new"
                  type="password"
                  defaultValue="@peduarte"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="text-xs">Email : Test@gmail.com</p>
              <p className="text-xs">Password : Test@123</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleLogin(email, password)}>
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
