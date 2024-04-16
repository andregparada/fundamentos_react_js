import { Post } from './Post';
import { Header } from './components/Header';

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ab odit nulla illo" 
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post"
      />
    </div>
  )
}