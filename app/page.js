export default async function Home() {
  let res = await fetch(
    'http://worldtimeapi.org/api/timezone/Europe/London',
    { next: { revalidate: 10 } },
  )
  let {datetime} = await res.json()
  return <h1>{datetime}</h1>
}