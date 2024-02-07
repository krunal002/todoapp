const TextInput = ({ name, value, placeholder, onChange }) => (
  <input
    type="text"
    name={name}
    id={name}
    className="input-field"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextInput;
