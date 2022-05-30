import Pretplata from "./Pretplata";
export default function Roditelj() {
  const kartica = {
    ime: "Mirko Kapetanović",
    datum: "17.5.1987",
    oib: "2931834928",
    spol: "M",
    slicica: "mirko.png"
  };

  return (
    <div className="a">
      <Pretplata salji={kartica} />;
    </div>
  );
}
