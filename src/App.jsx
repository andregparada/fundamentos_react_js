import { Post } from './Post';

export function App() {
  return (
    <div>
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