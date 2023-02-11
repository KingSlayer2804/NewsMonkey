import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src="https://i.guim.co.uk/img/media/b19dbdf8a093acbf659327bd23ef2106650d9018/337_351_1884_1130/master/1884.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8820168f236eed4ad787512f1d17661a" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}
