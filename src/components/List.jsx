const List = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] max-xsm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-[300px]:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-20 p-10 max-[400px]:p-0">
      {children}
    </div>
  );
};

export default List;
