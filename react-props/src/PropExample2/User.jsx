//TRANSFER FROM ONE FUNCTION TO ANOTHER FUNCTION COMPONENT:
import Employee from "./Employee";

//FUNCTION COMPONENT:
const User = () => {
  //PROPERTIES:
  let eid = 123;
  let ename = "lauren seth";
  let esal = 45000;

  //ARRAY OBJECTS:
  let users = [
    {
      id: 123,
      name: "Bijoy",
      salary: 78000,
    },
    {
      id: 124,
      name: "Biplob",
      salary: 56000,
    },
  ];

  return (
    <>
      <h1>User COMPONENT</h1>
      <hr />
      <Employee name={"Honey"} location={"india"} n={eid} salary={esal} />
      <Employee array={users}/>
    </>
  );
};

export default User;
