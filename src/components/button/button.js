function Button({ Text, onClick, Type = "button" }) {
  return (
    <button className="content-button" type={Type} onClick={onClick}>
      CLIQUE ME
    </button>
  );
}

export default Button;
