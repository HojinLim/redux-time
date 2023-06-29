
import Form from "./Form";
import List from "./List";


const Home = () => {


  return (
    //dispatch(ADD_TODO)
    <div>
      Home
      <Form/>
      <List isDone={false}/>
      <List isDone={true}/>
    </div>
  );
};

export default Home;
