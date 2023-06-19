import React from "react";
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends React.Component {
  render() {
    console.log('Movie prop:', this.props);
    return (
      <div>
        <h2>Movies</h2>
        {this.props.movieData.map((movie, index) => {
          return (
            <div key={index} className="movie-div">
              <Card className="movie-card">
                <Card.Body>
                  <Card.Title>Title:{movie.title}</Card.Title>
                  <Card.Title>Release Date:{movie.release_date}</Card.Title>
                  <Card.Img src={movie.imageUrl}/>
                  
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movie;