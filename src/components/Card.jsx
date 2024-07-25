const Card = ({ children, bgColor = "bg-gray-200" }) => {
  return (
    <div className={`${bgColor} p-4 rounded-md border-none shadow`}>
      {children}
    </div>
  );
};

export default Card;
