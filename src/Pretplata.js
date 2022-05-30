import Hajduk from "./hajduk.png";
import Price from "./cijene.png";
import Mirko from "./mirko.png";
import { Link } from "react-router-dom";
import Slika from "./sponze.png";
export default function Pretplata({ salji }) {
  return (
    <div className="Pretplataa">
      <div className="Menu">
        <img className="logo" src={Hajduk} />
        <h3 className="mali">HNK HAJDUK SPLIT</h3>
        <div className="linkovi">
          <Link className="txt" to="/">
            NASLOVNA
          </Link>{" "}
          &nbsp;&nbsp;&nbsp;
          <Link className="txt" to="/Povijest">
            POVIJEST
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link className="txt" to="/roditelj">
            PRETPLATA
          </Link>
          &nbsp;&nbsp;&nbsp;
          <Link className="txt" to="/Igraci">
            IGRAČI
          </Link>
        </div>
      </div>

      <img src={Price} />

      <iframe
        width="560"
        height="315"
        className="video"
        src="https://www.youtube.com/embed/Jw32ieTOHC0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h1 className="nasl">DIZAJ ISKAZNICE SEZONA 2022/2023</h1>
      <div className="iskaznica">
        <img className="mslika" src={Mirko} />
        <div className="polje">
          <p>Ime i Prezime : {salji.ime}</p>
          <p>OIB:{salji.oib}</p>
          <p>Spol:{salji.spol}</p>
          <p>Datum rođenja:{salji.datum}</p>
        </div>
        <h1 className="sjever">SJEVER</h1>
      </div>

      <img className="sponzori" src={Slika} />
    </div>
  );
}
