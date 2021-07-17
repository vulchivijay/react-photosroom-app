import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from './components/header';
import PhotoWall from './components/photowall';
import AddPhoto from './components/addphoto';
import Single from './components/single';

// Styles
import './App.css';

class Main extends React.Component {

  state = { loading: true }

  componentDidMount() {
    console.log("component did mount!");
    this.props.getPhotos().then(()=> {
      this.setState({loading: false});
    });
  }

  render () {
    const appTitle = "Photos";
    return (
      <div className="app-container">
        <Header title={appTitle}/>
        <Route exact path="/" render={() => {
          return <PhotoWall {...this.props} />
        }} />
        <Route path="/addphoto" render={({history}) => {
          return <AddPhoto onHistory={history} {...this.props}/>
        }} />
        <Route path="/single/:id" render={(params) => {
          return <Single loading={this.state.loading} {...this.props} {...params}/>
        }} />
      </div>
    );
  }
}

export default Main;