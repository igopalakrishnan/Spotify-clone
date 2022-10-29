import { PlayCircleOutline, Repeat, Shuffle, SkipNext, SkipPrevious } from '@material-ui/icons';
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song details</p>
            </div>
            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize="large" className="footer__icon" />
                <SkipNext className="footer__icon" />
                <Repeat className="footer__green" />

            </div>
            <div className="footer__right">
                <p>Volume controls</p>
            </div>
        </div>
    )
}

export default Footer
