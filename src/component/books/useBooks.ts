import { useEffect, useState } from 'react';
import BookType from '../../types/bookType';


const URL = "https://api.itbook.store/1.0/new";

const useBooks = () => {

    const [books, setBooks] = useState<BookType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(URL)
                .then((response) => response.json())
                .then((data) => {
                    const books = data.books as BookType[];
                    setBooks(books);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 0);
    }

    return { books, loading, error };
}

export default useBooks;