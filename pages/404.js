import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 3000)
    // }, [])
    
    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Return to <Link href="/"><u><a style={{ color: '#3978f5', cursor: 'pointer' }}>Homepage</a></u></Link></p>
        </div>
    );
}

export default NotFound;
