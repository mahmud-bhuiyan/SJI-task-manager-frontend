export const getDynamicBackgroundColor = (index) => {
  const colors = [
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
    "bg-purple-200",
    "bg-orange-200",
    "bg-red-200",
    "bg-teal-200",
    "bg-indigo-200",
    "bg-gray-200",
  ];
  return colors[index % colors.length];
};
