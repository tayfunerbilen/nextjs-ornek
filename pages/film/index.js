import { useRouter } from 'next/router';

export default function Film(){
	const router = useRouter()
	const { url } = router.query

	return <p>Film: {url}</p>
}