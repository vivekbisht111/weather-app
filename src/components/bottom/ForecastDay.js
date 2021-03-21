import React from 'react'
import sun from '../../staticfiles/sun.png'
import './ForecastDay.css'
import hrain from '../../staticfiles/heavyrain.png'
import rain from '../../staticfiles/lightrain.png'
import cloud from '../../staticfiles/cloudy.png'
import snow from '../../staticfiles/snow.png'
import normal from '../../staticfiles/normal.png'
import storm from '../../staticfiles/storm.png'
class ForecastDay extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {}
    }
    render()
    {
        const {g} = this.props
        let x
        if(g.desc=='Clear')
        x=sun
        else if(g.desc=='Rain'&&g.desc2 =='heavy rain')
        x=hrain
        else if(g.desc=='Rain')
        x=rain
        else if(g.desc.slice(0,4)=="Clou")
        x=cloud
        else if(g.desc.slice(0,3)=="Sno")
        x=snow
        else if(g.desc.slice(0,3)=="Sto")
        x = storm
        else
        x= normal
        return(
            <div className = "Fday">
            <div>
            <img src = {x}/>
            </div>
            <div>{g.day}</div>
            <div>{g.desc}</div>
            <div>{g.desc2}</div>
            <div>Avg. Temp</div>
            <div>{(g.tmax-273.15).toFixed(2)}°C</div>
            </div>


        )
    }
}
export default ForecastDay
