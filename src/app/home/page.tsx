import Link from "next/link";

const Page = () => {
  return(
    <div>
       <div><h1>Welcome to Home</h1></div>
       <h2>
        <Link href = "/blog">blog</Link>
       </h2>
       <h2>
        <Link href = "/settings">settings</Link>
       </h2>
       <h2>
        <Link href = "/conference">conference</Link>
       </h2>
    </div>
  )
}

export default Page