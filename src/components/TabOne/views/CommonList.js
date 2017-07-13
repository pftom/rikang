import React, { PureComponent } from 'react';

class CommonList extends PureComponent {
  
  constructor(props) {
    super(props);

    this.state = {
      loadingTop: false,
      loadingTail: false,
    }
  }
}