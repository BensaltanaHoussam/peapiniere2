type HeaderProps = {
    text: string;
  };
  
  function Header(props: HeaderProps) {
    return (
      <div>{props.text}</div>
      )
  }
  

  export default Header;