import React, { Component } from "react";
import Country from "./Country";
import Spinner from "./Spinner";
let len;
export default class continent extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {

    let url = "https://restcountries.eu/rest/v2/region/Asia";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
   this.setState({
        articles: parsedData,
        loading: false,
      });
      len=this.state.articles.length;
    
  }
  render() {
    
    return (
      <div className="container my-3 py-3">
        <h2 className="text-center my-5">Asia RestCountries API</h2>
       

        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.callingCodes}>
                <Country
                  name={element.name}
                  capital={element.capital}
                  region={element.region}
                  subregion={element.subregion}
                  population={element.population}
                  timezones={element.timezones}
                  borders={element.borders}
                  flag={element.flag}
                />
              </div>
            );
          })}
        </div>
      
      </div>
    );
  }
}
