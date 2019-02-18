import React from "react";
import './About.css';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

export class  About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }
    search () {
        console.log('this.state : ', this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = BASE_URL + 'q=' + this.state.query + 
                            '&type=artist&limit=1';
        console.log('FETCH_URL : ', FETCH_URL);
    }
    render () {
        return(
            <div className="about">
                 <p>This is About Component</p>
                <div className="App-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an artist"
                            query = {this.state.query}
                            onChange = {event => {this.setState({query: event.target.value})}}
                            onKeyPress = {event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Append onClick={() => this.search()}>
                            <InputGroup.Text><span className="glyphicon glyphicon-search"></span></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>
        );
    }
}