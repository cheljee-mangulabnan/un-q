import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar px-[6rem] h-20 top-0 left-0 right-0 bg-white   text-center flex justify-between items-center border-b-1 border-b-black shadow-sm'>
      <Link to='/'>
        <h1 className='font-bold text-[2.5rem]'>un-q</h1>
      </Link>
      <nav className=''>
        <ul className='links flex gap-5 text-lg font-bold'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/movies'>movies</Link>
          </li>
          <li>
            <Link to='/series'>series</Link>
          </li>
          <li>
            <Link to='/lists'>lists</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
