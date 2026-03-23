import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{background:"black", padding:"15px"}}>
      <Link href="/" style={{color:"white", marginRight:"20px"}}>Home</Link>
      <Link href="/about" style={{color:"white", marginRight:"20px"}}>About</Link>
      <Link href="/contact" style={{color:"white", marginRight:"20px"}}>Contact</Link>
      <Link href="/blog" style={{color:"white"}}>Blog</Link>
    </div>
  );
}