import React, { Component } from 'react'

export default class Deailcountry extends Component {
    render() {
        // let{flag}=this.props;
        return (
            <div class="row align-items-md-stretch">
            <div class="col-md-6">
              <div class="h-100 p-5 text-white bg-dark rounded-3">
               <img src=""alt="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="h-100 p-5 bg-light border rounded-3">
                <h2>Add borders</h2>
                <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                <button class="btn btn-outline-secondary" type="button">Example button</button>
              </div>
            </div>
          </div>
        )
    }
}
