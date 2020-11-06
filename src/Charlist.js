import React, {useEffect} from 'react'
import {fetchCharacter} from './suspensify'

const resource = fetchCharacter() // 1.- por fuera del componente

const CharList = () => {
    const list = resource.read().results // 2.- suponiendo que esto salio bien
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {list.map(char=><span key={char.name} >{char.name}</span>)}
        </div>
      );
}
 
export default CharList;