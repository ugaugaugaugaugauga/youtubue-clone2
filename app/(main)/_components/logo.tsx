import Image from 'next/image'

const Logo = () => {
  return (
    <button className='ml-4'>
      <Image src={'/logo.png'} alt='logo' width={90} height={20} />
    </button>
  )
}

export default Logo
