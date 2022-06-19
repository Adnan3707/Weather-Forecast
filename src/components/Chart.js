import React from 'React'
import {Sparklines, SparklinesLine} from 'react-sparklines'

export default function(props){
    return (
    <Sparklines height={120} width={180} data={props.data}>
    <SparklinesLine color={props.color}/>
    </Sparklines>
    )
}
