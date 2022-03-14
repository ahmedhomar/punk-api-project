/* import "./AlbumInfo.scss";
import { useParams } from "react-router-dom";

const AlbumInfo = (props) => {
  const { albumsArr } = props;

  const { albumId } = useParams();
  console.log(albumId);
  const idFromAlbumsArr = albumsArr.filter(
    (album) => album.idAlbum === albumId
  );
  console.log(idFromAlbumsArr[0].strMood);
  // Use the id from the query params to find the album you need from the albumsArr prop.

  return (
    <article className="album-info">
      <div className="album-info__banner">
        <img
          className="album-info__img album-info__img--first"
          src={idFromAlbumsArr[0].strAlbumThumb}
          alt={idFromAlbumsArr[0].strArtistStripped}
        />
      </div>
      <div className="album-info__content">
        <h2 className="album-info__heading">{idFromAlbumsArr[0].strAlbum}</h2>
        <p>
          {" "}
          {idFromAlbumsArr[0].strDescriptionEN.slice(0, 300).concat("...")}
        </p>
        <h2 className="album-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>Mood : {idFromAlbumsArr[0].strMood} </li>
          <li>Released : {idFromAlbumsArr[0].intYearReleased} </li>
          <li>Genre : {idFromAlbumsArr[0].strGenre}</li>
          <li>Score : {idFromAlbumsArr[0].intScore} </li>
        </ul>
      </div>
      <div className="album-info__banner">
        <img className="album-info__img album-info__img--last" alt="" />
      </div>
    </article>
  );
};
 */
