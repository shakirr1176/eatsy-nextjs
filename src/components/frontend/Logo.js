import Image from 'next/image'
import logoImg from '../../../public/images/eatsy.png'
import logoImgSquare from '../../../public/images/eatsy-square.png'

export default function Logo() {
  return (
    <>
        <Image className='hidden lg:inline-block' src={logoImg} width="162" height="35" alt="logo" />
        <Image className='lg:hidden' src={logoImgSquare} width="62" height="35" alt="logo" />
    </>
  )
}
