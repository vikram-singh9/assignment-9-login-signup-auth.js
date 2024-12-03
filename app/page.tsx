
import { SessionWrapper } from "@/components/SessionWrapper"
import SignIn from "@/components/Login/Signin"
import SignOut from "@/components/Login/Signout"
import { auth } from "@/lib/auth"
import SignupForm from "@/components/Login/SignupForm"


export default async function Home () {
  const session = await auth ()
  const isAunthenticated = !! session?.user 
  return(
      <div className="flex flex-col items-center justify-center">
       

        <SessionWrapper>
              {isAunthenticated ? <SignOut /> : <SignIn/>}
          </SessionWrapper>
      
          
          <SignupForm/>
      </div>
  )
}