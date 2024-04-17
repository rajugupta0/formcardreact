import Card from "../Card/Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full p-4 flex justify-center gap-4 flex-wrap overflow-auto">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            id={index}
            key={index}
            user={item}
          />
        );
      })}
    </div>
  );
};

export default Cards;
