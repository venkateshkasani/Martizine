import Cookies from "js-cookie";

export default async function Home() {
  const cookie = Cookies.get('artk');
  return (
    <div className="">
      Hello world
    </div>
  );
}

// export const getServerSideProps:GetServerSideProps = async (context) => {
//     const cookies = parseCookies(context);
//     const artk = cookies.artk;
//     if(!artk){
//       return {
//         redirect:{
//           destination:'/signin',
//           permanent:false
//         }
//       }
//     } else {
//       return {
//         props:{}
//       }
//     }
// }