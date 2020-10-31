import React from 'react';



/*const list2 =[
  {
    title: 'ESPN',
    url: 'http://www.espn.com',
    author: 'Michael Jordan',
    num_comments: 10,
    points: 2,
    objectID: 0,
  },
  {
    title: 'CNN',
    url: 'http://www.cnn.com/',
    author: 'Anderson Cooper',
    num_comments: 1,
    points: 2,
    objectID: 1,
  },
];*/

const App = () => {
  const stories =[
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const useSemiPersistentState = (key,initialState) =>{
    const [value, setValue] = React.useState(localStorage.getItem(key) || initialState);

    React.useEffect(()=>{localStorage.setItem(key,value)},[value,key]);

    return [value,setValue];
  }

  const [searchTerm,setSearchTerm]=useSemiPersistentState('search','React');
      
  const handleSearch = event =>{
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
  
      <Search search={searchTerm} onSearch={handleSearch}/>
      <p>You are searching for <strong>{searchTerm}</strong></p>
      <hr />
      <List list={searchedStories}/>
      
    </div>
  );
}

const Search = ({search,onSearch}) => {

  return(
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" value={search} onChange={onSearch}/>
    </>
  );
}

/*const List = props =>{
  return (props.list).map(item => (
      <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
      </div>
    )
  );
};*/

const List = ({list}) => list.map(item=><Item key={item.objectID} item={item}/>);

const Item = ({item})=>(
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);

export default App;
