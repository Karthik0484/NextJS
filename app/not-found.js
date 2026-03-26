export default function NotFound() {
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <a href="/">
        <button style={{padding:"10px 20px", marginTop:"20px"}}>
          Go Back Home
        </button>
      </a>
    </div>
  );
}