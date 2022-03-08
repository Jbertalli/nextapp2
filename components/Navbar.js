import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/N&J-logo.png" width={128} height={128} />
            </div>
            <Link href="/calorie"><a>Calorie Calculator #1</a></Link>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninja Listing</a></Link>
        </nav>
    );
}

export default Navbar;