"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CountriesItemProps {
    flag_url: string;
    name:string;
    iso_code: string;
}
const CountriesItem :React.FC<CountriesItemProps> = ({flag_url,name,iso_code}) => {
    return ( 
        <div className="shadow-lg rounded-lg p-4 flex flex-col justify-between items-center">
           <Link href={`countries/${iso_code}`}> <Image width={224} height={224} src={flag_url} alt={name} className="aspect-video"/></Link>
            <p>{name}</p>
        </div>
     );
}
 
export default CountriesItem;