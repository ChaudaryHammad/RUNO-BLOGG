import { Input } from '../../components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card.jsx'
import React, { useRef, useState } from 'react'
import { Label } from "../../components/ui/label"
import { Button } from '../../components/ui/button.jsx'
import { EyeIcon, EyeOffIcon, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'


function Signup() {

   
    
    const [avatar, setAvatar] = useState(null)




    const [showPassword, setShowPassword] = useState(false)

    const handleImage=(event)=>{
        setAvatar(URL.createObjectURL(event.target.files[0]))
    }
    return (


      <div className='flex justify-center items-center h-screen bg-gray-100'>
      
          <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your email below to create your account.</CardDescription>
          </CardHeader>
          <div className='w-full text-center '>
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
</div>

          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="abc" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@gmail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                <div className='flex relative'>
                <Input id="password" type={
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

                <div className="flex items-center justify-between ">
                
                  <Input id="email"  accept=".jpg,.jpeg,.png" onChange={handleImage} type="file" className="w-[220px] " />
                    
                  

                  {avatar ? (
                      <img
                        src={avatar}
                        alt="avatar"
                        className="h-12 w-12 object-cover rounded-full"
                      />
                    ) : (
                     <>
                     <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                     </>
                    )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Button>Create account</Button>
                </div>
                <CardDescription>Already have an acount?{' '}
                
                <Link to={"/login"} className='underline hover:text-gray-700'>login</Link></CardDescription>
              </div>
            </form>
          </CardContent>
         
        </Card>
      </div>
  )
}

export default Signup


