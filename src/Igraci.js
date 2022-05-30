import Suba from "./subasic.jpg";
import Fero from "./ferro.jpg";
import Mikanovic from "./mikanovic.jpg";
import Pukstas from "./pukstas.jpg";
import Melnjak from "./melnjak.jpg";
import Grgic from "./grgic.jpg";
import Krovinovic from "./krovinovic.jpg";
import Livaja from "./livajaa.jpg";
import Kalinic from "./kalinic.jpg";
import Colina from "./colina.jpg";
import Katic from "./katic.jpg";
import Lovre from "./lovre.jpg";
import Fossati from "./fossati.jpg";
import Atanasov from "./atanasov.jpg";
import Biuk from "./biuk.jpg";
import Slika from "./sponze.png";
import { Link } from "react-router-dom";
import Hajduk from "./hajduk.png";
export default function Igraci() {
  return (
    <div className="Igraci">
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
      <img className="suba" src={Suba} />
      <img className="suba" src={Fero} />
      <img className="suba" src={Mikanovic} />
      <img className="suba" src={Krovinovic} />
      <img className="suba" src={Pukstas} />
      <img className="suba" src={Melnjak} />
      <img className="suba" src={Grgic} />
      <img className="suba" src={Livaja} />
      <img className="suba" src={Kalinic} />
      <img className="suba" src={Colina} />
      <img className="suba" src={Katic} />
      <img className="suba" src={Lovre} />
      <img className="suba" src={Fossati} />
      <img className="suba" src={Atanasov} />
      <img className="suba" src={Biuk} />

      <p className="x">
        S lijeva na desno : Danijel Subašić, Ferro, Filip Krovinović,Dino
        Mikanovic,Pukstas,Dario Melnjak,Lukas Grgić.Marko Livaja,Nikola
        Kalinić,Luka Čolina,Nikola Katić,Lovre Kalinić,Marko Fossati,Atanasov,
        Stipe Biuk
      </p>
      <img className="sponzorii" src={Slika} />
    </div>
  );
}
