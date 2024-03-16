import PropTypes from "prop-types";
import CheckBox from "../common/CheckBox";

CheckboxList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default function CheckboxList({name, list }) {
  const stops = list.map((stopName, index) => (
    <li className="list-group-item" key={index}>
      <CheckBox name={stopName} index={index} />
    </li>
  ));

  return (
    <div className="card mb-3">
      <div className="card-header">{name}</div>
      <ul className="list-group list-group-flush">{stops}</ul>
    </div>
  );
}