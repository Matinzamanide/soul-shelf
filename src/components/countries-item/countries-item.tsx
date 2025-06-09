import Link from "next/link";
export interface CountriesItemProps {
    flag_url: string;
    name:string;
    iso_code: string;
}
const CountriesItem :React.FC<CountriesItemProps> = ({flag_url,name,iso_code}) => {
    return ( 
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
           <Link href={`http://localhost:3000/countries/${iso_code}`}> <img src={flag_url} alt={name} className="aspect-video"/></Link>
            <p>{name}</p>
        </div>
     );
}
 
export default CountriesItem;