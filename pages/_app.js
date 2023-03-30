import '../styles/globals.css'
import Layout from '../components/ui/layout/layout'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import FormLogin from '../components/form-login/form-login';

function MyApp({ Component, pageProps }) {




  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [favorites, setFavorites] = useState([]);

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  
  useEffect(() => {
    
    if(router.pathname === '/' || router.pathname === '/category'){ router.push('/category/Ordinary%20Drink')}

    const us_local = localStorage.getItem('username')  == null ? "" : localStorage.getItem('username');
    const av_local = localStorage.getItem('avatar')  == null ? "" : localStorage.getItem('avatar');
    
    if(localStorage.getItem('favorites') == undefined || localStorage.getItem('favorites') == null || localStorage.getItem('favorites') == ""){
      setFavorites([])
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    else{
      let favs = JSON.parse(localStorage.getItem('favorites'));
      setFavorites([...favs])
    }

    setUsername(us_local);
    setAvatar(av_local);
    setLoading(false)
  },[])
  
  if(username.trim() === ""){

    if(loading){
      return(<div></div>)
    }
    return(
      <div className=" flex justify-center items-center min-h-screen w-full bg-primary">
        <FormLogin setAvatar={setAvatar} currentAvatar={avatar} setUsername={setUsername} />
      </div>

    )
  }

  return (
    <Layout favorites={favorites} setFavorites={setFavorites} currentAvatar={avatar}>
        <Component {...pageProps} />
    </Layout>
    
  )
  
  
}

export default MyApp
