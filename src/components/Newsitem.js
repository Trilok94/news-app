import React, { Component } from 'react'
import '../Newsitem.css'
export default class Newsitem extends Component {
    // to make constructor
    // constructor () {
    //     super();
    //     console.log('this is constructor')
    // }

    render() {
        let { title, discription, url_img, news_url , sourceName , author, publishedAt} = this.props; // set the props in class 



        // wrong way to define props, don't do this 
        // this.props = {
        //     title,
        //     discription,
        //     url_img
        // }
        return (
            <>
                <div id='allcont' className="card" >
                    <span id='tag' style={{zIndex: '1'}} className="badge bg-primary">
                        {sourceName}
                        {/* <span  className="visually-hidden">unread messages</span> */}
                    </span>
                    <img src={url_img}  className="card-img-top" alt="..." />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-muted">By {author }<br/>Updated at {publishedAt}</small></p>
                        <a href={news_url} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}
