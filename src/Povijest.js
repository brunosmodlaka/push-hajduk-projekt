import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hajduk from "./hajduk.png";
import Pov from "./pov.png";
import Pov2 from "./pov2.png";
import Slika from "./sponze.png";

export class Povijest extends Component {
  state = {
    ime: "",
    email: "",
    url: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("forma je potvrdena", this.state);
  };
  render() {
    return (
      <div>
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
        <center>
          <img className="pov" src={Pov} />
        </center>
        <div className="tekstohaj">
          Hajduk je u veljači 1911. u Pragu osnovala skupina splitskih
          studenata. Oko kluba su se okupljali prohrvatski, puntarski građani,
          pristaše sjedinjenja kraljevine Dalmacije s kraljevinom Hrvatskom i
          Slavonijom. Odatle i pridjev Hrvatski u nazivu kluba, Hrvatski grb kao
          dio Hajdukovog grba te zastava kluba s crvenom i plavom bojom te
          bijelim natpisom Hajduk u sredini. Tradicionalna boja dresa je bijela
          s plavim donjim dijelom što simbolizira bijelo jedro broda i plavu
          boju Jadranskog mora. Nadimci kluba su Bili, Hajduci, Majstori s mora.
          Godine 2011. Hajduk je velikom proslavom obilježio 100 godina od
          osnutka.
        </div>

        <div className="drugidiv">
          Po istraživanju GfK Hrvatska iz 2005. godine za Hajduk navija
          približno 24 % ljudi u Hrvatskoj ili preko 1 060 000 navijača. Za
          Hajduk navija 76 % ljudi u Dalmaciji što je ujedno i najveći postotak
          podrške za nogometni klub u jednoj regiji u Hrvatskoj.Osim
          tradicionalno najveće podrške u Dalmaciji klub ima velik broj navijača
          u svim dijelovima Hrvatske, među Hrvatima u BiH i među hrvatskom
          dijasporom u inozemstvu. Navijačka skupina Hajduka, Torcida, osnovana
          je 1950. godine te je najstarija navijačka grupa u Hrvatskoj i Europi.
          Torcida je poznata po fanatičnoj podršci i vjernosti klubu. Hajduk je
          2016. imao 43 339 članova.
        </div>

        <div className="trecidiv">
          Hajduk je, uz zagrebački Dinamo, jedan od dva najpopularnija i
          najtrofejnija kluba u Hrvatskoj. Nogometna utakmica između ova dva
          velika suparnika naziva se Vječni derbi, a zbog velikog rivaliteta i
          navijačkih tenzija mnogi Vječni derbi svrstavaju među najveće
          nogometne derbije na svijetu.Rivalstvo splitskih bilih i zagrebačkih
          plavih traje još od 1913. godine kada su Hajduk i Građanski odigrali
          prvu utakmicu. Do danas je odigrano 218 derbija, a Hajduk je slavio 68
          puta. Jedan je od rijetkih klubova koji nikada nisu ispali iz prve
          lige. Prva su momčad na svijetu koja je obišla svih pet kontinenata.
        </div>
        <center>
          <img className="pov2" src={Pov2} />
        </center>

        <h2 className="spisak">
          Ako imate povijesnu fotografiju Hajduka , pošaljite te nam je ovom
          formom te sudjelujte u nagradnoj igri .
        </h2>

        <div class="state">
          <h1>Dobrodošli, {this.state.ime}</h1>
          <form>
            <input
              placeholder="Ime i prezime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
            />
            <input
              placeholder="E-mail"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <input
              placeholder="URL SLIKE"
              value={this.state.url}
              onChange={(e) => this.setState({ url: e.target.value })}
            />
            <button className="botun" onClick={(e) => this.onSubmit(e)}>
              Posalji
            </button>
          </form>
        </div>

        <img className="sponzorii" src={Slika} />
      </div>
    );
  }
}

export default Povijest;
