import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import Footer from '../Footer/Footer';
function Widgets() {
    return (
        <>
            <div className="widgets">
                <div className="widget_top">
                    <div className="widget_header">
                        <h2>LinkedIn News</h2>
                        <InfoIcon />
                    </div>
                    <div className="widget_body">
                        <ul className="widget_option">
                            <li>
                                <h4>Top trends in AI, finance, and retail</h4>
                                <p>
                                    Top news 1,705 readers
                                </p>
                            </li>
                            <li>
                                <h4>Top trends in AI, finance, and retail</h4>
                                <p>
                                    Top news 1,705 readers
                                </p>
                            </li>
                            <li>
                                <h4>Top trends in AI, finance, and retail</h4>
                                <p>
                                    Top news 1,705 readers
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="widget_ad">
                    <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="" srcset="" />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Widgets