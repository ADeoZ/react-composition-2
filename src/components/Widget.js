import Title from "./Title";

export default function Widget(props) {
  const {title, link} = props;
  return (
    <div>
      <Title text={title} link={link}/>
      {props.children}
    </div>
  );
}