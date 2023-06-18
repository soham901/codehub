async function getData() {
  const res = await fetch('http://localhost:8000/')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 


  
  return res.json()
}


export default async function Home() {

  const getdata: Promise<Test> = getData()

  const data = await getdata

  return (
    <>
    <hr />
    <div className="m-5">
      <p className="text-4xl font-semibold">CodeHub</p>
    </div>
    <div>
      <h2>Data: {data.msg}</h2>
    </div>
    <hr />
    </>
  )
}
