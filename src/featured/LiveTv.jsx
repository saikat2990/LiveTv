import React from 'react'
import "../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player';
import jomunaTv from '../assets/jomunaTv.jpg';
import somoy from '../assets/somoy-tv-logo.jpg'
import channel24 from '../assets/Channel24logo.svg'
import ekattor from '../assets/EkattorTv.png'
import atn from '../assets/atn.png';
import news24 from '../assets/news24.jpg'
import dbc from '../assets/dbc.jpg'
import indp from '../assets/indp.jpg'

import request from 'request';
import VideoHolder from '../components/VideoHolder';
const axios = require('axios');
const cheerio = require('cheerio');


export default class LiveTv extends React.Component {

    constructor() {
        super();
        this.state = {
            linkList: [
                "https://www.youtube.com/watch?v=zztB5-6OC_4",
                "https://www.youtube.com/watch?v=KgiwN7ddb2U",
                "https://www.youtube.com/watch?v=x19xewlMaBo",
                "https://www.youtube.com/watch?v=Zz8rx8goc6I",
                "https://www.youtube.com/watch?v=RHselq0kVps",
                "https://www.youtube.com/watch?v=dp8l0Wrqh_4",
                "https://www.youtube.com/watch?v=VL-e_T0xd8k",
                "https://www.youtube.com/watch?v=93cszVHAFrY"
            ],
            imgList:[
                jomunaTv,somoy,channel24,ekattor,atn,news24,dbc,indp
            ],
            channelName:[
                "Jamuna Tv Live","Shomoy Tv Live","Channel 24 Tv Live","Ekattor Tv Live",
                "ATN Bangla News Tv","News24 Tv","DBC News Tv Live","Independent Television"
            ]
        }
    }

    // componentDidMount() {
    //     var channelList =
    //         [
    //             "https://www.youtube.com/channel/UCN6sm8iHiPd0cnoUardDAnw",
    //             "https://www.youtube.com/channel/UCxHoBXkY88Tb8z1Ssj6CWsQ",
    //             "https://www.youtube.com/channel/UCHLqIOMPk20w-6cFgkA90jw",
    //             "https://www.youtube.com/channel/UC0ThmWmb7WQATrrDMLQph7Q",
    //             "https://www.youtube.com/channel/UCKlhfq1ILoAFav7iw5iCnfA",
    //             "https://www.youtube.com/channel/UCPREnbhKQP-hsVfsfKP-mCw",
    //             "https://www.youtube.com/channel/UCUvXoiDEKI8VZJrr58g4VAw"
    //         ]

    //     var tempLiveUrl = [];
    //     for (var channelIndex = 0; channelIndex < 1; channelIndex++) {
    //         var allYouTubeLinkListPerChannel = [];

    //         request('https://cors-anywhere.herokuapp.com/' + channelList[channelIndex], function (err, res, body) {
    //             if (err) console.log(err);
    //             var re = /watch/g, str = body.toString();
    //             //console.log(body.toString());
    //             var match;
    //             var listIndex = [];
    //             var youtubeLink = []
    //             while ((match = re.exec(str)) != null) {
    //                 listIndex.push(match.index);
    //             }
    //             var yt = /youtube.com/g;
    //             var ytmatch
    //             while ((ytmatch = yt.exec(str)) != null) {
    //                 youtubeLink.push(ytmatch.index);
    //             }
    //             console.log(youtubeLink.length);
    //             for (var i = 0; i < youtubeLink.length; i++) {
    //                 var ytstrng = "";
    //                 for (var j = 0; j < youtubeLink[i] + 20; j++) {
    //                     strng += str[youtubeLink[i] + j];
    //                 }
    //                 console.log(ytstrng);
    //             }

    //             for (var i = 0; i < listIndex.length; i++) {
    //                 var strng = "";
    //                 if (str[listIndex[i] + 5] == '?' && str[listIndex[i] + 6] == 'v' && str[listIndex[i] + 7] == '=') {
    //                     var tag = 0;
    //                     while (true) {
    //                         if (str[listIndex[i] + tag] == '"') break;
    //                         strng += str[listIndex[i] + tag];
    //                         tag++;
    //                     }
    //                 }

    //                 if (strng != "") allYouTubeLinkListPerChannel.push('https://www.youtube.com/' + strng);
    //             }
    //             console.log(allYouTubeLinkListPerChannel[0] + "before");
    //             tempLiveUrl.push(allYouTubeLinkListPerChannel[0]);

    //             allYouTubeLinkListPerChannel = [];
    //         })

    //     }

    //     setTimeout(() => {
    //         this.state.linkList.push(tempLiveUrl);
    //         console.log(this.state.linkList);
    //     }, 9000);
    // }

    innerHtmlFunction = (start, end) => {
        var innerHtml = [];
        for (var i = start - 1; i < end; i++) {
            innerHtml.push(
                <div className="col">
                    <div>
                        <VideoHolder url={this.state.linkList[i]}
                            img={this.state.imgList[i]} name={this.state.channelName[i]}/>
                    </div>
                </div>
            )
        }
        return innerHtml;
    }

    render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    {this.innerHtmlFunction(1,4)}
                </div>
                <br />
                <div className="row" style={{ marginTop: "50px" }}>
                {this.innerHtmlFunction(5,8)}
                </div>
            </div>
        );
    }

}