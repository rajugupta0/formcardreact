function Card({ user, handleRemove, id }) {
    const { name, image, details } = user;
  
    return (
      <div className="w-44 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="w-10 h-10 rounded-full bg-blue-950">
          <img
            className="w-full h-full object-cover overflow-hidden "
            src={image}
            alt=" "
          />
        </div>
        <h1 className="text-xl mt-2 font-semibold">{name}</h1>
        <p className="text-gray-800 mt-1 text-center tracking-tight text-sm">
          {details}
        </p>
        <button
          onClick={() => handleRemove(id)}
          className="mt-3 px-3 py-1 bg-red-600 rounded-md  text-white text-sm"
        >
          Remove
        </button>
      </div>
    );
  }
  
  export default Card;
  