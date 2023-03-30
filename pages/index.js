
const Home = () => {

  
  
  return(
    <div></div>
  )
}


export default Home;


export async function getStaticProps(){
  return{
    redirect: {
      destination: '/category/Ordinary_Drink'
    }
  }
}