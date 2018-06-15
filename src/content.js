import React, { Component } from "react";
import axios from 'axios';
import imgur from './imgur.json';

const styles = {
  containerStyle: {
      height: 'auto'
  },
  gridStyle: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(33vw, 1fr))",
    gridGap: 10,
    gridTemplateRows: "repeat(3, minmax(22vh, 1fr)"
  },
  imgStyle: {
      maxWidth: '100%',
      maxHeight: '100%'
  }
};
const instance = axios.create({
    headers: { 'Authorization': `CLIENT-ID ${imgur.client_id}`}
})

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            pages: 1
        }
    }
    componentDidMount() {
        instance
        .get(`https://api.imgur.com/3/gallery/r/corgi/top/week/`)
          .then(response => {
            this.setState({
                images: response.data.data
            })
          })
          .catch(err => {
              console.log(err);
          });
    }
    createGrid = (page) => {
        if (page > (this.state.images.length) / 9) {
            return;
        }
        let start = page * 9 - 9;
        let end = start + 9;
        let images = [];
        if (this.state.images.length > 0) {
            for (let i = start; i < end; i++) {
                images.push(
                    <div>
                        <img src={this.state.images[i].link} key={this.state.images[i].key} style={styles.imgStyle}/>
                    </div>
                );
            }
        }
        return (
            <div style={styles.gridStyle}>
                {images}
                <hr style={{color: 'black'}}/>
            </div>
        );
    }
    createGrids = () => {
        let grids = [];
        for (let i = 1; i <= this.state.pages; i++) {
            grids.push(this.createGrid(i));
        }
        return grids;
    }
    addPage = () => {
        this.setState({
            pages: this.state.pages + 1
        })
    }
    render() {
        return (
            <div style={styles.containerStyle} className="container">
                {this.createGrids()}
                <button onClick={this.addPage}>Load More</button>
            </div>
        );
    }
}

export default Content;
