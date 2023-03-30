


const redirectCategory = () => {
    return(
        <div></div>
    )
}

export async function getStaticProps(){
    return{
      redirect: {
        destination: '/category/Ordinary_Drink'
      }
    }
  }

  export default redirectCategory;