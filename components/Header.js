import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';
import Image from "next/image"
import HeaderItem from "./HeaderItem"


const Header = () => {

  return (
    <>
      <header className='flex flex-col sm:flex-row mx-5 mt-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem title='HOME' Icon={HomeIcon} />
          <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
          <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
          <HeaderItem title='COLLECTION' Icon={CollectionIcon} />
          <HeaderItem title='SEARCH' Icon={SearchIcon} />
          <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image
          src='https://links.papareact.com/ua6'
          width={200} height={100}
          className='object-contain'
        />
      </header>
      <div className='flex items-center justify-center'>
      <input type='text' placeholder='search movie here...' className='border border-gray-500 bg-gray-300 text-black outline-none w-4/5 p-2 mb-5 mx-10 rounded-md' />
      </div>
    </>
  )
}

export default Header
