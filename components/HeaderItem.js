import { useState } from 'react';

const HeaderItem = ({title, Icon}) => {
  const [search, setSearch] = useState(false);

  const handelSearch = () => {
    setSearch(true);
  }

  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest '><button onClick={handelSearch}>{title}</button></p>
    </div>
  )
}

export default HeaderItem;
