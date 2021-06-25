import React from 'react';

function Movies({ name, image }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={image} />
    </div>
  );
}

const collection = [
  {
    name: 'puffin',
    image:
      'https://cdn.pixabay.com/photo/2020/06/01/10/02/puffin-5246026_960_720.jpg',
  },
  {
    name: 'kitty',
    image:
      'https://cdn.pixabay.com/photo/2021/06/04/14/14/cat-6309964_960_720.jpg',
  },
  {
    name: 'dessert',
    image:
      'https://cdn.pixabay.com/photo/2018/01/14/12/45/sand-3081770_960_720.jpg',
  },
  {
    name: 'rose',
    image:
      'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg',
  },
  {
    name: 'sakura',
    image:
      'https://cdn.pixabay.com/photo/2018/04/05/15/01/sakura-3293045_960_720.jpg',
  },
  {
    name: 'swan',
    image:
      'https://cdn.pixabay.com/photo/2021/06/22/05/32/swan-6355208_960_720.jpg',
  },
];

function App() {
  return (
    <div>
      The First My MovieApps
      <h1>
        {collection.map((movie) => (
          <Movies name={movie.name} image={movie.image} />
        ))}
      </h1>
    </div>
  );
}

export default App;
