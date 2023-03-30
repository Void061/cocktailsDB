import '../styles/globals.css'
import Layout from '../components/ui/layout/layout'
import { useState } from 'react'
import FormLogin from '../components/form-login/form-login';
function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("ivan");


  
  if(username.trim() === ""){
    return(
      <div className=" flex justify-center items-center min-h-screen w-full bg-primary">
        <FormLogin setUsername={setUsername} />
      </div>

    )
  }

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
