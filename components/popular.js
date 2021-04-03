import Link from 'next/link';

export default function Popular({movies}) {
	return <div className="popular">
		<h2>Popüler Filmler</h2>
		<div className="popular-inner">
			{movies.results.map(movie => (
				<Link href={`/film/${movie.id}`}>
					<a>
						<h3>{movie.title}</h3>
						<img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt=""/>
					</a>
				</Link>
			))}
		</div>
		<style jsx>{`
          .popular {
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0;

            h2 {
              font-size: 40px;
              margin-bottom: 20px;
            }

            .popular-inner {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;

              a {
                width: calc(25% - 10px);
                position: relative;

                h3 {
                  font-size: 20px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  color: #fff;
                  background: linear-gradient(to top, #000, transparent);
                  padding: 50px 20px 20px 20px;
                }

                img {
                  width: 100%;
                }
              }
            }
          }
		`}</style>
	</div>
}