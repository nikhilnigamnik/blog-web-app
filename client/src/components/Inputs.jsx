export const Input = ({ type, name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-transparent border outline-none px-8 py-2 rounded-3xl w-full"
    />
  );
};
