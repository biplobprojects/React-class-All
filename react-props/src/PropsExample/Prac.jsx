import Practice1 from "./Practice1";

const Prac = () => {
  // PROPERTIES:
  let name = "Biplob borboruah";
  let eid = 123;
  let salary = 78000;
 let  designation="director"
  // ARRAY OBJECTS:

  let users = [{

    id:123,
    name:"nakul",
    salary: 45000
    
  },

{

    id: 456,
    name:"bicky",
    salary:89000
}];

  return  <>
  <h1>REACT PROP PRACTICE</h1>
  <Practice1 ename={name} allid={eid} esal={salary} desig={designation}/>

  <Practice1/>
  
  
  </>;
};

export default Prac;
