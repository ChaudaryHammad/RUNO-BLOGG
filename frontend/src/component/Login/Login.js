import { Input } from '../../components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card.jsx'
import React, { useState } from 'react'
import { Label } from "../../components/ui/label"
import { Button } from '../../components/ui/button.jsx'
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { signInFail,signInStart,signInSuccess,logout } from '../../App/feature/user/userSlice.js'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)



    const data = {
        email,
        password
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signInStart())
    await axios.post('http://localhost:8000/api/v2/user/login',
      data, { withCredentials: true }
    ).then((res)=>{
    dispatch(signInSuccess(res.data.rest))
    toast.success(res.data.message)
    console.log(res.data)
    navigate('/')
    }).catch((error)=>{
      dispatch(signInFail())
     
      toast.error(error.response.data.message)
      
    
    })
  }
    return (
      <div className='flex justify-center items-center h-screen '>
          <Link to={'/'} className='absolute top-5 lg:left-20  '>
  <h1  className=' text-[20px] font-bold ' style={{fontFamily:"League Spartan"}}>RUNO</h1>
</Link>
      
          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email below to login your account.</CardDescription>
          </CardHeader>
          {/* <div className='w-full text-center '>
          <Button className="h-10">
          <svg fill="none" viewBox="2 -5 20 45" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_134_34)">

<path fill="#4285F4" d="M25.9 17.7C25.9 16.8 25.8 15.9 25.7 15H13.2V20.1H20.3C20 21.7 19.1 23.2 17.7 24.1V27.4H22C24.5 25.1 25.9 21.7 25.9 17.7Z"></path>
<path fill="#34A853" d="M13.1999 30.5999C16.7999 30.5999 19.7999 29.3999 21.9999 27.3999L17.6999 24.0999C16.4999 24.8999 14.9999 25.3999 13.1999 25.3999C9.7999 25.3999 6.7999 23.0999 5.7999 19.8999H1.3999V23.2999C3.6999 27.7999 8.1999 30.5999 13.1999 30.5999Z"></path>
<path fill="#FBBC04" d="M5.8001 19.8999C5.2001 18.2999 5.2001 16.4999 5.8001 14.7999V11.3999H1.4001C-0.499902 15.0999 -0.499902 19.4999 1.4001 23.2999L5.8001 19.8999Z"></path>
<path fill="#EA4335" d="M13.2 9.39996C15.1 9.39996 16.9 10.1 18.3 11.4L22.1 7.59996C19.7 5.39996 16.5 4.09996 13.3 4.19996C8.3 4.19996 3.7 6.99996 1.5 11.5L5.9 14.9C6.8 11.7 9.8 9.39996 13.2 9.39996Z"></path>
</g>
<defs>

</defs>
</svg> Log in with Google
    </Button>
          </div>

          <div className="flex items-center justify-between mt-4 mb-4">
  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
  <CardDescription>or continue with</CardDescription>
  <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
</div> */}
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
              
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input value={email}  onChange={(e)=>setEmail(e.target.value)} id="email" type="email" placeholder="m@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                <div className='flex relative'>
                <Input  value={password}  onChange={(e)=>setPassword(e.target.value)} id="password" type={
                            showPassword ? 'text' : 'password'
                } />
                  {
                    showPassword ? (
                        <>
                        <EyeIcon
							className="h-4 w-4 absolute right-3 top-3"
							aria-hidden="true"
                            onClick={() => setShowPassword(!showPassword)}
						/>
                        </>
                    ):(
                        <>
                        <EyeOffIcon
							className="h-4 w-4 absolute right-3 top-3"
							aria-hidden="true"
                            onClick={() => setShowPassword(!showPassword)}
						/>
                        </>
                    )
                  }
                </div>
                </div>

                <div className="flex flex-col space-y-1.5">
                <CardDescription>Forgot password? <Link className='underline hover:text-gray-700'>recover now</Link></CardDescription>
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Button type='submit'>Login</Button>
                </div>
                <CardDescription>Don't have an acount?{' '}
                
                <Link to={"/registration"} className='underline hover:text-gray-700'>Create account</Link></CardDescription>
              </div>
            </form>
          </CardContent>
         
        </Card>
      </div>
  )
}

export default Login