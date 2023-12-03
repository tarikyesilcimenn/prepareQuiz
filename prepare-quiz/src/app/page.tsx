import Link from 'next/link'

export default function Home() {
  return (
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <h3>Landing Page</h3>
        <Link href={'/quiz'}>Prepare Quiz</Link>
      </div>
  )
}
