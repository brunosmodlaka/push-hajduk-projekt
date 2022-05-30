import { Link } from "react-router-dom";
import Poljud from "./poljud.jpg";
import Hajduk from "./hajduk.png";
import Pretplataa from "./pretplataa.png";
import Slika from "./sponze.png";
import Livaja from "./livaja.jpg";
import Dambra from "./dambra.jpg";
export default function Naslovna() {
  return (
    <div className="Naslovna">
      <div className="Menu">
        <h2 className="heder">Bruno Smodlaka G2P</h2>

        <img className="logo" src={Hajduk} />
        <h3 className="mali">
          <a href="https://www.split.hr/">HNK HAJDUK SPLIT</a>
        </h3>
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

      <center>
        <a href="https://hajduk.hr/pretplate">
          <img className="pretp" src={Pretplataa} />
        </a>
      </center>

      <h3 className="awesome">FINALE KUPA</h3>
      <center>
        <div className="aa">
          <h2 className="dinamo">DINAMO-HAJDUK (3-1)</h2>

          <img className="slicica" src={Dambra} />
        </div>
      </center>

      <div className="livaja">
        <img className="slija" src={Livaja} />
        <p className="tekstic">
          Marko Livaja najbolji je strelac HT prve lige!
        </p>
      </div>

      <div className="fullwrap">
        <img src className="poljud" src={Poljud} />

        <div className="fullcap">
          <p className="posebno">
            HAJDUK-RIJEKA 26.05 <br />
            19:00
          </p>
        </div>
      </div>

      <img className="sponzori" src={Slika} />
      <p className="futer">&copy; COPYRIGHT 2022.</p>
    </div>
  );
}
