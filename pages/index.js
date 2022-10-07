// const URL_API = 'https://p2auhulj5i.execute-api.us-east-1.amazonaws.com/beta/desenhos'

// export async function getServerSideProps() {
//   const res = await fetch(URL_API)
//   const data = await res.json()
//   return { props: { data } }
// }

export default function Home({ data }) {
  return (
    <>
      <h1>Desenhos</h1>
      {/* <h1>olha: {data.products[0].zona1}</h1> */}
    </>
  )
}