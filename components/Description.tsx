type DescriptionProps = {
    text: string;
  };
  
  function Description(props: DescriptionProps) {
    return (
      <div>{props.text}</div>
      )
  }

  export default Description;