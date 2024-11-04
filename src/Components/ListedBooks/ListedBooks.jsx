import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/addToDb';


const ListedBooks = () => { 
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()

    useEffect(()=>{
        const storedReadList = getStoreReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)

    },[])
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
            <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
            </TabList>
        
            <TabPanel>
            {/* <h2>Book Read list : {readList.length}</h2> */}
            <div className='w-full flex flex-col gap-6'>
                {
                    readList.map(book => 
                        <div key={book.bookId} className='w-full flex justify-between items-center p-6 border-2 rounded-2xl'>
                            <div className='bg-gray-300 rounded-xl py-7 px-10'>
                                <img className='h-[172px]' src={book.image} alt="" />
                            </div>

                            <div>
                                <h2 className='text-2xl font-bold'>{book.bookName}</h2>
                            </div>


                        </div>
                    )
                }
            </div>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default ListedBooks;