import React, { Component } from 'react';

import './App.css';
import YTSearch from 'youtube-api-search';
import {AddVideoList} from './components/add-video-list.js';
import {AddMainVideo} from './components/add-main-video.js';


class App extends Component {
  constructor(){
    super();
    this.state ={
      serchInput:'wolraks toi',
      dataArray:[],
      videoId:"",
      title:"",
      description:""
    }
  }

  yotubeSerch = (serchText)=>{
    const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;
    YTSearch({ key: API_KEY, term: serchText }, data => {
      this.setState({
          dataArray: data,
          videoId:data[0].id.videoId,
          title: data[0].snippet.title,
          description: data[0].snippet.description
        });
    });
  }

  changeFirstVideo = (id)=>{
    const dataArray= this.state.dataArray;
    this.setState({
      videoId:dataArray[id].id.videoId,
      title: dataArray[id].snippet.title,
      description: dataArray[id].snippet.description
    });
  }

  createList = ()=>{
    const dataArray = this.state.dataArray;
    return dataArray.map((el, ind)=>{
      return <AddVideoList 
              link={el.snippet.thumbnails.default.url} 
              title={el.snippet.title}
              handler={this.changeFirstVideo}
              id={ind}
              key={ind}
            />
    })
  }

  changeInpuText=(event)=>{
      this.setState({
        serchInput:event.target.value
      })
      this.yotubeSerch(event.target.value);
  }

  render() {
    let isEmptyDataArray = (this.state.dataArray.length === 0);
    if(isEmptyDataArray){
      this.yotubeSerch(this.state.serchInput);
    }

    return (
      <main className="container">
          <div className="search-bar navbar">
              <input 
                type="text" 
                placeholder="Search" 
                value={this.state.serchInput}
                onChange={this.changeInpuText}
              />
          </div>
          <div className="row">
            <AddMainVideo
              videoId={this.state.videoId}
              title={this.state.title}
              description={this.state.description}
            />

            <ul className="col-md-4 list-group">
              {this.createList()}
            </ul>
          </div>
      </main>
    );
  }
}

export default App;