import Image from "next/image";

export default function Home() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", marginTop:"40px"}}>
      <h1>Home Page</h1>

      <Image
        src="/image.webp"
        width={200}
        height={200}
        alt="Profile"
      />

      <p>This is my Next.js Image</p>
    </div>
  );
}