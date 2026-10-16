import type { Tanuloszoba } from "../adatok";
import Kartya from "./Kartya";

interface KartyakProps {
    szobak: Tanuloszoba[];
    onFoglal: (id: number) => void;
}
export default function Kartyak({ szobak, onFoglal }: KartyakProps) {
    if (szobak.length == 0) {
        return <p>Nincs találat</p>

    }
    return (
        <>
        <div className="kartyak">
            {szobak.map((szoba) => (
                <Kartya key = { szoba.id } szoba = { szoba } onFoglal = { onFoglal }/>
            ))}
        </div>
        </>
    )
}