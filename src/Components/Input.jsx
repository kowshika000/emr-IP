import React from "react";

const Input = ({ value, type, onChange, label, name, options }) => {
  if (type === "select") {
    return (
      <div className="form-input">
        <label>{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="custume_input"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="form-input">
        <label>{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="custume_textarea"
        />
      </div>
    );
  }
  return (
    <div className="form-input">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default Input;
