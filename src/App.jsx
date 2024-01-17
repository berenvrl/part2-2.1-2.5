import Course from "./components/Course";

const App = () => {
  const course1 = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const course2 = {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  };

  const courses = [course1, course2];

  return (
    <ul style={{ listStyle: "none" }}>
      {courses.map((courseobj) => {
        return <Course courseobj={courseobj} key={courseobj.id} />;
      })}
    </ul>
  );
};

export default App;
