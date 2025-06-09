
async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json()
    return data
  } catch(error) {
    console.log(error)
  }
}

export default async function Home() {

  const strapiData = await getStrapiData("/api/chat-doc")
  console.log(strapiData)

  return (
    <div></div>
  );
}
