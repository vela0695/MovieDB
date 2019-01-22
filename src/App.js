import React, { Component } from "react";
import logo from "./dish.svg";
import "./App.css";
import RestaurantRow from "./restaurantRow.js";
import $ from "jquery";
//https://api.themoviedb.org/3/search/movie?api_key=c9b64d11d03b1238838430f96cc43b41&language=en-US&query=marvel&include_adult=false

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("this is my initializer");
    // const restaurants = [
    //   {
    //     id: 0,
    //     image_src:
    //       "https://pbs.twimg.com/profile_images/836660132951941121/nY1FWtCw_400x400.jpg",
    //     title: "Applebee's",
    //     overview:
    //       "Founded nearly three decades ago on the principles of exceptional value and family fun, Applebee's Services, Inc., operates what is today the largest casual-dining chain in the world. This prominent eatery draws people of all ages and lifestyles with its fun, family-friendly atmosphere and signature bar and grill menu. Applebee's continues to grow and prosper, and further differentiates itself with innovative attractions, like the popular Carside to Go service available at many of its restaurants. "
    //   },
    //   {
    //     id: 1,
    //     image_src:
    //       "https://pbs.twimg.com/profile_images/1056747885964886018/N_SLVdue_400x400.jpg",
    //     title: "Buffalo Wild Wings",
    //     overview:
    //       "Founded nearly three decades ago on the principles of exceptional value and family fun, Applebee's Services, Inc., operates what is today the largest casual-dining chain in the world. This prominent eatery draws people of all ages and lifestyles with its fun, family-friendly atmosphere and signature bar and grill menu. Applebee's continues to grow and prosper, and further differentiates itself with innovative attractions, like the popular Carside to Go service available at many of its restaurants. "
    //   }
    // ];

    // var restRows = [];
    // restaurants.forEach(rest => {
    //   console.log(rest.id);
    //   const restRow = <RestaurantRow key={rest.id} rest={rest} />;
    //   restRows.push(restRow);
    // });

    // this.state = { rows: restRows };

    this.doSearch();
  }
  doSearch() {
    console.log("Searching...");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=c9b64d11d03b1238838430f96cc43b41&language=en-US&query=spider&include_adult=false";
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetched data succesfully ");
        const results = searchResults.results;
        var restRows = [];
        results.forEach(rest => {
          rest.image_src = "https://image.tmdb.org/t/p/w185" + rest.poster_path;
          console.log(rest.title);
          const restRow = <RestaurantRow rest={rest} key={rest.id} />;
          restRows.push(restRow);
        });
        this.setState({ rows: restRows });
      },
      error: (xhr, status, err) => {
        console.log("Failed to get the data");
      }
    });
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src={logo} />
              </td>
              <td width="8" />
              <td>
                <h3>Food Delivery</h3>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="searchBox" placeholder="Search for a Restaurant" />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
