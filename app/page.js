/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

const USERS = [
  {
    name: 'Carlos',
    link: '/browse',
    avatar:
      'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05'
  },
  {
    name: 'Kids',
    link: '/browse',
    avatar:
      'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05'
  },
  {
    name: 'Add',
    link: '/browse',
    avatar:
      'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05'
  }
]

const Home = () => {
  return (
    <div className='bg-black w-screen h-screen flex flex-col items-center justify-center'>
      <p className='text-white text-5x1'> Who's watching?</p>
      <div className='flex flex-row gap-3 mt-6'>
        {USERS.map((user, i) => (
          <Link
            href={user.link}
            key={i}
            className='flex flex-col items-center justify-center '>
            {/* <div className="h-12 w-12 rounded-md bg-white"></div> */}
            <Image
              src={user.avatar}
              alt={user.name}
              width={100}
              height={100}
              className='rounded-lg'
            />
            <p className='text-gray-400 mt-3'>{user.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
