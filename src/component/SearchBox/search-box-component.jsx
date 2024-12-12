import "./search-box.styles.css";

export default function searchBox({ onChangeHandler, placeHolder, ClassName }) {
  return (
    <input
      className={`search-box ${ClassName}`}
      type="search"
      placeholder={`${placeHolder}`}
      onChange={onChangeHandler}
    />
  );
}

// class SearchBox extends Component {
//   render() {
//     return (
//       <input
//         className={`search-box ${this.props.ClassName}`}
//         type="search"
//         placeholder={this.props.placeHolder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }
