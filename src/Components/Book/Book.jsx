import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {

    const {bookId,bookName,author,image,yearOfPublishing,publisher,tags,category,rating,totalPages,review} = book
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 border-2 p-6">
                <figure className='bg-gray-200  py-8 rounded-xl'>
                    <img className='h-[166px]'
                    src={image}
                    alt="Book" />
                </figure>
                <div className="card-body">
                    <div className="flex  gap-4">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs border text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;