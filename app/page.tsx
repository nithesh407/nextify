import Link from "next/link";
import React from "react";


const Home: React.FC = () => {
  return (
    <>
      <Link href='/Dashboard'>Dashboard Page</Link>
      <Link href='/Profile'>Profile Page</Link>
    </>
  );
}


export default Home;