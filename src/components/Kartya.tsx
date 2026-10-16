import type { Tanuloszoba } from "../adatok";

interface KartyaProps {
    szoba: Tanuloszoba;
    onFoglal: (id: number) => void;
}
export default function Kartya({ szoba, onFoglal }: KartyaProps) {
    const isMegtelt = szoba.foglalt_helyek >= szoba.ferohely;
    return (
        <div className={`kartya ${isMegtelt ? 'megtelt' : ''}`}>
            {isMegtelt && <span className="megtelt">Megtelt!</span>}
        </div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    )
}
