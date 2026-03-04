import NavLink from './NavLink'
import Logo from './Logo'
import Link from 'next/link'

const Navbar = () => {
    const links = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/all-products", label: "All Products"},
        {href: "/contact", label: "Contact"},
    ]
    return (
        <div className="bg-base-100 shadow-sm ">
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
                <Link href="/login" className="btn btn-primary btn-outline">Login</Link>
            </div>
        </div>
        </div>
    )
}

export default Navbar