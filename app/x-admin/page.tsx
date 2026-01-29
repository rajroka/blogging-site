import React from 'react'
import Signin from './Signin'


const Page = async () => {


//   const session = await auth.api.getSession({
//     headers : await headers()
//   })

//    if(session){
//     redirect("/dashboard")
//    }


  return (
    <>
      <Signin />
    </>
  )
}

export default Page