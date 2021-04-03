import Link from 'next/link';
import Head from 'next/head';

export default function Home(){
	return <div>
		<Head>
			<title>Blog</title>
		</Head>
		<h3>Blog page</h3>
		<Link href="/">
			Geri dön
		</Link>
	</div>
}