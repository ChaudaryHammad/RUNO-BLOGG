import { Input } from ".././components/ui/input.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from ".././components/ui/card.jsx";
import React, { useState } from "react";
import { Label } from ".././components/ui/label";
import { Button } from ".././components/ui/button.jsx";

import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { backend_url } from ".././server.js";
function ForgetPasswordPage() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const data = {
    email,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch(signInStart())
    await axios
      .post(
        `${backend_url}/user/forget-password`,

        data
      )
      .then((res) => {
        // dispatch(signInSuccess(res.data.rest))
        setLoading(false);
        toast.success(res.data.message);
        console.log(res.data);
        setEmail("");
        // navigate('/reset-password')
      })
      .catch((error) => {
        //   dispatch(signInFail())

        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Link to={"/"} className="absolute top-5 lg:left-20  ">
        <h1
          className=" text-[20px] font-bold "
          style={{ fontFamily: "League Spartan" }}
        >
          RUNO
        </h1>
      </Link>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Recover your account</CardTitle>
          <CardDescription>
            Enter your email below to get token.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="m@gmail.com"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Button disabled={loading} type="submit">{loading ? "Generating..." :"Get Reset Link"}</Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgetPasswordPage;
