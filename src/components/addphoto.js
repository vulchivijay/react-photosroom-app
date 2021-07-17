import React from 'react';

export default class AddPhoto extends React.Component {
  constructor() {
    super();
    this.state = {
      imagePath: ''
    }

    this.onFileChange = this.onFileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFileChange(event) {
    this.setState({ imagePath: event.target.files[0] })
  }

  handleSubmit(event) {
    event.preventDefault();
    const ImagePath = this.state.imagePath;
    const Description = event.target.elements.description.value;
    const formData = new FormData();
    formData.append('imagePath', ImagePath);
    formData.append('description', Description);

    if (ImagePath && Description) {
      this.props.uploadPhoto(formData);
      this.props.onHistory.push("/");
    }
  }

  render () {
    // console.log(this.props);
    return (
      <div className="addphoto-container">
        <h1 className="kaushan text-center">Upload form</h1>
        <form className="addPhoto-form" onSubmit={this.handleSubmit}>
            <div className="form-controller">
              <label>Upload Photo:</label>
              <input type="file" name="imagepath" onChange={this.onFileChange} />
            </div>
            <div className="form-controller">
              <label>Description:</label>
              <input type="text" placeholder="" name="description"/>
            </div>
            <div className="btn-controllers">
              <button className="btn btn-green">Submit</button>
            </div>
          </form>
      </div>
    );
  }
}