import React, { Component } from 'react';
import "./Button.css";

class Button_set extends Component {
    render() {
        return (
            <div id="Button-3">
                <div id="buttonset">
                <button type="button"  class="btn btn-primary" id="b1">Seed</button>
                <button type="button"  class="btn btn-primary" id="b2">수업하기</button>
                <button type="button"  class="btn btn-primary" id="b3">포털</button>
                </div>
            </div>
        );
    }
}

export default Button_set;