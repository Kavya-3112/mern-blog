import React from 'react';
import { Navbar, Button, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-900 to-blue-200 rounded-lg'>tech's</span> Blog
      </Link>
      <form>
        <TextInput 
          type='text'
          placeholder='search'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='grey' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
          <FaMoon />
        </Button>
        <Link to='/signin'>
          <Button gradientDuoTone="purpleToBlue">
            Sign in
          </Button>
        </Link>
      
      <Navbar.Collapse>
        <Navbar.Link as={Link} to='/'>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to='/about'>
          About
        </Navbar.Link>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
