import React from 'react';
import MiddleBody from './MiddleBoby';
import colors from './images/colors.jpg';
import city from './images/citysunrise.jpg';
import autumn from './images/autumn.jpg';
import color2 from './images/color2.jpg';

export default function GetMiddleBody() {
    return (
        <div className='wrapper'>
            <MiddleBody text='others' photo={colors} logo={colors} />
            <MiddleBody text='certification' photo={city} logo={city} />
            <MiddleBody text='cv' photo={autumn} logo={autumn} />
            <MiddleBody text='others' photo={color2} logo={color2} />
        </div>
    )
}