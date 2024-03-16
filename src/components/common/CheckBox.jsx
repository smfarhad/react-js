import PropTypes from 'prop-types'
CheckBox.propTypes={
    name:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
}
export default function CheckBox({name,index}) {
  const uniqueAttribute=name.replaceAll(' ','')+index;
  return (
    <div className="form-check">
      <input
            className="form-check-input"
            type="checkbox"
            value=""
            id={uniqueAttribute}
        />
      <label className="form-check-label" htmlFor={uniqueAttribute}>
       {name}
      </label>
    </div>
  );
}

