import React ,{useContext} from 'react'
import Link from 'next/link'
import { AbilityContext } from "@/userAccess/can";
import updateAbility from "@/userAccess/updateAbility"

const Home = () => {
 
  const ability = useContext(AbilityContext);

  const handleClick = ()=>{
    const userRole = "admin";
    updateAbility(ability,userRole);
   
  }


  return (
    <div>
  
     {ability.can('visit', 'planpage') && "you have plan page access" }
     <p><Link href="/dashboard" >got to dashboard</Link></p>
     <p><Link href="/plan">plan page </Link></p>
     <button onClick={handleClick}>login</button>
    </div>
    
  )
}

export default Home