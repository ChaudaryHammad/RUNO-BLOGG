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
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { backend_url } from ".././server.js";
function ResetPage() {
 
  const navigate = useNavigate();
  const { resetToken } = useParams();
const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const data = {
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    await axios
      .put(`${backend_url}/user/reset-password/${resetToken}`, data)
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message);
        setPassword("");
        navigate('/login')
      })
      .catch((error) => {
    
        toast.error(error.response.data.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-[70vh] ">
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
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Enter new password to continue.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="flex relative">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type={showPassword ? "text" : "password"}
                  />
                  {showPassword ? (
                    <>
                      <EyeIcon
                        className="h-4 w-4 cursor-pointer absolute right-3 top-3"
                        aria-hidden="true"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </>
                  ) : (
                    <>
                      <EyeOffIcon
                        className="h-4 w-4 absolute right-3 top-3"
                        aria-hidden="true"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Button disabled={loading} type="submit">{loading ? "Resetting..." :"Reset Password"}</Button>
              </div>
            </div>

            <div className="flex justify-between mt-2 ">
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResetPage;
