import { createContext } from "react";
import { ICardContext } from "../../interfaces/molecules-interfaces";

//* This file will work as a mapper to build my cardContext


const nothing = ()=>{
    console.log('Nothing important')
}
const card:ICardContext = {
    title:'Card Name',
    groupButton: {
         buttons: [
            {
                text:'+',
                onClick: nothing,
            }
         ]
    },
    footer:{
        text: 'Nothing really',
    }
};


export const CompoundCardContext = createContext(card);