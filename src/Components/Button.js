function Button(props) {
  return (
    <>
      <button className={props.className} onClick={props.oncClick}>
        {props.name}
      </button>
    </>
  );
}

export default Button;
