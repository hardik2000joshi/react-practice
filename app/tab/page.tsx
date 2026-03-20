export default function TabPage() {
  const x = 245;
  const name = "Web Development";
  const h = 218*1.27;
  function greet() {
    return "Hello from function greet";
  }
  function car() {
    return 218*2;
  }
  const numbers = [1, 2, 3, 4,5];
  const set = numbers.map(x => x *2);
  return(
    <div>
    <h1>
        This is TAB page
        </h1>
        <p>
          value of x is {x} <br />
          Course name is {name} <br />
        </p>

        <h1>
          My Calculations page
        </h1>
        <p>
          It has {h} volume of capacity
        </p>
        {greet()} <br />
        {car()}
        <div>
          {set.map((num, index) => <p key={index}> {num} </p>)}
          </div>
        </div>
  );
}