/* eslint-disable react/prop-types */

export const Input = ({
  placeholder,
  required,
  type,
  name,
  value,
  onchange,
  htmlFor,
  title,
  icon,
  status,
  message,
}) => {

  return (
    <div className="relative t">
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-600"
      >
        {title}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onchange}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 hover:cursor-pointer hover:border-gray-600 mb-1 t k"
      />
      <p className="block mb-2 text-xs font-medium text-red-600">
        {status && message}
      </p>
      <div className="absolute right-4 top-[50%] cursor-pointer scale-[0.8] t">
        {icon}
      </div>
    </div>
  );
};
