const CustomTextarea = ({ name, label, placeholder, register, errors }) => {
  return (
    <div className="relative mb-4" data-te-input-wrapper-init>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        className="body-large mb-0 flex h-20 w-full rounded-md border border-input bg-[#F6F2F7] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#78767A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-[#C8C5CA] disabled:cursor-not-allowed disabled:opacity-50"
        id={name}
        placeholder={placeholder}
        {...register(name, {
          required: `Description is required`,
        })}
      />
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name].message}</span>
      )}
    </div>
  );
};

export default CustomTextarea;
