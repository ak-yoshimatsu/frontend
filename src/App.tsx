import axios from "axios";
import './App.css';

const App = () => {
  const list = async () => {
    const res = await axios.get('http://localhost:3003/user')
    console.log(res.data);
  }
  const post = async () => {
    const data = {
      "id": "4",
      "name": "SHIRO",
      "email": "SHIRO@mail.com"
    }
    const res = await axios.post('http://localhost:3003/user', data)
    console.log(res.data);
  }
  const get = async () => {
    const res = await axios.get('http://localhost:3003/user/1')
    console.log(res.data);
  }
  const put = async () => {
    const data = {
      "id": "4",
      "name": "SHIRO",
      "email": "SHIRO@mail.com"
    }
    const res = await axios.put('http://localhost:3003/user/4', data)
    console.log(res.data);
  }
  const remove = async () => {
    const res = await axios.delete('http://localhost:3003/user/4')
    console.log(res.data);
  }

  return (
    <>
      <h1>React</h1>
      <button type="button" onClick={list}>list</button>
      <button type="button" onClick={get}>get</button>
      <button type="button" onClick={post}>post</button>
      <button type="button" onClick={put}>put</button>
      <button type="button" onClick={remove}>delete</button>
    </>
  );
}

export default App;
