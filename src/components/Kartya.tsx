import type { Tanuloszoba } from "../adatok";

interface KartyaProps {
    szoba: Tanuloszoba;
    onFoglal: (id: number) => void;
}
export default function Kartya({ szoba, onFoglal }: KartyaProps) {
    const isMegtelt = szoba.foglalt_helyek >= szoba.ferohely;
    return (
        <>
            <div className={`kartya ${isMegtelt ? 'megtelt' : ''}`}>
                {isMegtelt && <span className="megtelt">Megtelt!</span>}
                <div><h3>{szoba.szoba_nev}</h3>
                    <p>{szoba.szobatipus}</p>
                    <p>{szoba.emelet}</p>
                    <p>{szoba.ferohely}</p>
                    <p>{szoba.foglalt_helyek}</p>
                </div>
                <button className="btnFoglal"
                    onClick={() => onFoglal(szoba.id)}
                    disabled={isMegtelt}>
                    {isMegtelt ? 'Nincs szabad hely' : 'Helyet foglalok'}
                </button>
            </div>
        </>
    )
}
