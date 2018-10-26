function Person(props){
  return (   
      <div className ="card">
        <div className = "front">
          <h1>{props.name}</h1>
          <p>Age: {props.age}</p>
        </div>
        <div className="back"> 
            <h1>Name :{props.name}</h1>
        </div>
       </div>
  );
}
var app = (
<div className="container">
  <Person name="Mohammad" age="33"/>
</div> 
);
ReactDOM.render(app,document.querySelector('#app'));
