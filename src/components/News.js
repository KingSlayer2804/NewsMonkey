import React, { Component } from 'react'
import NewsItem from "./NewsItem"

export default class news extends Component {
  render() {
    return (
      <div>
        <h2 className="my-3">NewsMonkey-Top Headlines</h2>
        <div className="row my-5">
            <div className="col-md-4">
                <NewsItem title="Hello World" description="This is description"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Hello World" description="This is description"/>
            </div>
            <div className="col-md-4">
                <NewsItem title="Hello World" description="This is description"/>
            </div>
        </div>
      </div>
    )
  }
}
