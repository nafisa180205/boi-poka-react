import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/addToDb";



const BookDetail = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id )

    const handleMarkAsRead = (id) =>{
        addToStoreReadList(id)

    }
    
    const {bookId: currentBookId,bookName,author,image,yearOfPublishing,publisher,tags,category,rating,totalPages,review} = book
    return (
        <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">

            <div className="bg-base-200 rounded-lg w-1/2 flex justify-center items-center p-20">
            <img
            src={image}
            className="  h-[450px] " />
            </div>
                <div className="w-1/2">
                <h1 className="text-3xl font-bold">{bookName}</h1>
                <p className="py-3">
                    By: {author}
                </p>
                <hr className="my-3" />
                    <p>{category}</p>
                <hr className="my-3" />
                <p className="text-sm"><strong>Review:</strong>{review}</p>
                <div className="flex justify-between items-center my-3">
                    <p>Tag</p>
                    {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs border text-green-600"># {tag}</button>)
                        }
                </div>
                <hr className="my-3"/>
                <p className="flex justify-between items-center"><span className="text-gray-600">Number of Pages:</span> <span className="text-black font-semibold">{totalPages}</span></p>
                <p className="flex justify-between items-center"><span className="text-gray-600">Publisher:</span> <span className="text-black font-semibold">{publisher}</span></p>
                <p className="flex justify-between items-center"><span className="text-gray-600">Year of Publishing:</span> <span className="text-black font-semibold">{yearOfPublishing}</span></p>
                <p className="flex justify-between items-center"><span className="text-gray-600">Rating:</span> <span className="text-black font-semibold">{rating}</span></p>
                
                
                <div className=" flex gap-5 my-3">
                    <button className="btn border-2" onClick={() =>handleMarkAsRead(bookId)}>Read </button>
                    <button className="btn btn-primary">Wishlist</button>
                </div>
                </div>
        </div>

        </div>
    );
};

export default BookDetail;