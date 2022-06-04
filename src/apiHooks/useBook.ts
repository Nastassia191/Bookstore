import { useEffect, useState } from 'react';
import BookType from '../types/bookType';



const URL = "https://api.itbook.store/1.0/books/";

const useBook = (isbn13: string | undefined) => {
  const [book, setBook] = useState<BookType>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(`${URL}${isbn13}`)
        .then((response) => response.json())
        .then((data) => {
          const book = data as BookType;
          setBook(book);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    }, 0);
  }


  return { book, loading, error };
}

export default useBook;