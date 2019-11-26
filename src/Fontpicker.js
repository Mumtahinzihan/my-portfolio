import React from 'react';
import FontPicker from "font-picker-react";
export default class FontPicker extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeFontFamily: "Open Sans",
      };
    }
   
    render() {
      return (
        <div>
          <FontPicker
            apiKey="YOUR_API_KEY"
            activeFontFamily={this.state.activeFontFamily}
            onChange={nextFont =>
              this.setState({
                activeFontFamily: nextFont.family,
              })
            }
          />
        </div>
      );
    }
  }