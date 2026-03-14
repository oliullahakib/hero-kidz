import NavLink from './NavLink'
import Logo from './Logo'
import Link from 'next/link'
import AuthButtons from '../Buttons/AuthButtons'
import { FaHeart } from 'react-icons/fa'


const Navbar = () => {
    const links = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/all-products", label: "All Products"},
        {href: "/contact", label: "Contact"},
    ]
    
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50 ">
            <div className="navbar  max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <li key={link.href}>
                                <NavLink href={link.href}>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavLink href={link.href}>
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href="/cart">
                    <button className="btn btn-ghost btn-circle mr-5">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            {/* <span className="badge badge-sm indicator-item">{cartItem.length}</span> */}
                        </div>
                    </button>
                </Link>
                <Link href="/profile/wishlist">
                    <FaHeart className='mr-5 bg-red-100 text-4xl text-red-500 p-2 rounded-md'/>
                </Link>
                <AuthButtons />
            </div>
        </div>
        </div>
    )
}

export default Navbar