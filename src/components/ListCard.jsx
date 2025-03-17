import "../styles/listCard.css";
const ListCard = ({ children, className = "" }) => {
  return (
    <div
      className={
        " bg-white duration-[1s] rounded-2xl customShadow p-1" + className
      }
    >
      {children}
    </div>
  );
};

export default ListCard;
