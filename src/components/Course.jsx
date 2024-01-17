//all subcomponenets of Course is in here asa well.

export default function Course({ courseobj }) {
  return (
    <li>
      <CourseItem courseobj={courseobj} />
    </li>
  );
}

const CourseItem = ({ courseobj }) => {
  return (
    <>
      <Header header={courseobj.name} />
      <Content parts={courseobj.parts} />
      <Total parts={courseobj.parts} />
    </>
  );
};

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Content = ({ parts }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {parts.map((item) => (
        <Part key={item.id} item={item} />
      ))}
    </ul>
  );
};

function Part({ item }) {
  return (
    <li>
      {item.name} {item.exercises}
    </li>
  );
}

const Total = ({ parts }) => {
  const totalArray = parts.map((item) => item.exercises);
  const total = totalArray.reduce((acc, cur) => acc + cur, 0);
  //console.log(total);

  return <p style={{ fontWeight: "bold" }}>total of {total} exercises </p>;
};
