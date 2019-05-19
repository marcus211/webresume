import React from 'react';
import box001 from './work/001.png'
import box006 from './work/006.png'

const linkblock = [
    {id: 1, weburl:"https://www.genesis-geo.com/", imgurl: box001},
    {id: 2, weburl:"https://www.google.com", imgurl: box006},
    {id: 3, weburl:"https://www.google.com", imgurl: box006},
    {id: 4, weburl:"https://www.google.com", imgurl: box006},
    {id: 5, weburl:"https://www.google.com", imgurl: box006},
    {id: 6, weburl:"https://www.genesis-geo.com/vr_F5/index.html", imgurl: box006},
]

//https://stackoverflow.com/questions/30202755/react-router-open-link-in-new-tab
class LinkBlock extends React.Component {
    render() {
      return (
            <div className="box">
            {this.props.data.map((d)=> {
                    return <a 
                    href={d.weburl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    > 
                        <img src={d.imgurl} className="boxstyle" alt=""/>
                    </a>
                })
            }          
            </div>
        )
    }
}

class BoxFlex extends React.Component {
    render() {
        return (
            <div>
                <LinkBlock data={linkblock} />
            </div>
        )
    }
}

export default BoxFlex;