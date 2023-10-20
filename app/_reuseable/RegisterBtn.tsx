import Link from "next/link";


const RegisterBtn = () => {
  return (
    <Link href="/register" className="inline-block bg-gradient-to-r from-pink to-blue px-14 py-3 text-2xl rounded hover:bg-gradient-to-l transition-all hover:scale-90">Register</Link>
  )
}

export default RegisterBtn