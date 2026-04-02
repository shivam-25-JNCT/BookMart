import React, { useEffect, useState } from 'react'
import { useFireBase } from '../context/FireBase'
import BookCard from '../components/Card';




function Home() {
  const { listAllBook } = useFireBase();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    listAllBook().then((val) => {
      //console.log(val.docs);
      
       setBooks(val.docs)
    }
    )

  }, [])
  return (
    <div className='container mt-5'>
   {books.map((book)=>{
    return <BookCard book={book} key={book.data().userId}/>
   })}
    </div>
  )
}

export default Home