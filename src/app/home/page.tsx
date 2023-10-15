import Link from "next/link";
import Image from "next/image";
import bgImage from "../../images/bg-image-1.jpg"

const Page = () => {
  return(
    <div>
       <Image src={bgImage}
        alt="Background Picure"
         quality={100} 
         placeholder="blur" 
         sizes={"100vw"}
         fill
         style={{objectFit: "cover", overflow: "hidden", zIndex: "-1"}}
         />
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