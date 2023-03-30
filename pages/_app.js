import '../styles/globals.css'
import Layout from '../components/ui/layout/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import FormLogin from '../components/form-login/form-login';
function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  const router = useRouter();

  
  useEffect(() => {
    if(router.pathname === '/' || router.pathname === '/category'){ router.push('/category/Ordinary_Drink')}
  },[])
  
  if(username.trim() === ""){
    return(
      <div className=" flex justify-center items-center min-h-screen w-full bg-primary">
        <FormLogin setAvatar={setAvatar} currentAvatar={avatar} setUsername={setUsername} />
      </div>

    )
  }

  return (
    <Layout currentAvatar={avatar}>
        <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
