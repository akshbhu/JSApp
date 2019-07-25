import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Storage } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class App extends React.Component {
  onChange(e) {
    
      const file = e.target.files[0];
      Storage.put('Z/abc.png', file, {
        level: 'public',

      })
      .then (result => console.log(result))
      .catch(err => console.log(err));
      
      /*
      Storage.list('')
    .then(result => console.log(result))
    .catch(err => console.log(err));
    */
    
    
    
  }

  render() {
      return (
          <input
              type="file" 
              onChange={(e) => this.onChange(e)}
          />
      )
  }
}

export default withAuthenticator(App)
