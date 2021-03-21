import React from 'react'
import ".\\bottom.css"
import ForecastDay from './ForecastDay.js'
class Bottom_portion extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {}
        this.giver = this.giver.bind(this)

    }
    giver(i,listt)
    {
        var day = new Date();
        var hr = day.getHours();
        let x;
        if(hr<9)
        {
            x=i*8+7;
        }
        else if(hr>18)
        {
            x=i*8-7;
        }
        else
        x = i*8

        const a = listt[x].dt_txt.slice(0,11)
        const b = listt[x].weather[0].main
        const c = listt[x].weather[0].description
        const d = listt[x].main.temp_max
        const e = listt[x].main.temp_min
        const give = {
            day : a,
            desc : b,
            desc2 : c,
            tmax : d,
            tmin : e
        }
        return give
    }
    render()
    {
        const {forcastlist} = this.props
        const items=[]
        let i
        for(i=1;i<=4;i++)
        {
            const give = this.giver(i,forcastlist);
            items.push(<ForecastDay g = {give}/>)
        }

        console.log("From Bottom_portion with love : ",this.props.forcastlist)
        return (
            <div className = 'bottom'>
            <div className = 'content'>
            {items}
            </div>
            </div>
        )
    }
}

export default Bottom_portion
