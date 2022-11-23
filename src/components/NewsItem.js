import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date,source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }} >
                    <div style={{display: 'flex',
                        justifyContent: 'flex-end',
                         position: 'absolute',
                         right: '0'}}>
                     <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                        </div>
                    <img src={!imageurl ? "https://images.hindustantimes.com/tech/img/2022/11/21/1600x900/FILES-US-LABOUR-TECH-UNION-APPLE-0_1662098340765_1662098340765_1669031262826_1669031262826.jpg" : imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {date}</small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem