import React from "react";

const FormField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </div>
  );
};

export default FormField;
