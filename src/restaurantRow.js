import React from "react";

class RestaurantRow extends React.Component {
  render() {
    return (
      <table key={this.props.rest.id}>
        <tbody>
          <tr>
            <td>
              <img
                className="pictures"
                alt="Logo"
                src={this.props.rest.image_src}
              />
            </td>
            <td>
              {this.props.rest.title}
              <p>{this.props.rest.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default RestaurantRow;
