import React, { useEffect, useState } from 'react';
import axios from "axios";

const Miniproject = () => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);

    const GetUsers = async () => {
        try {
            const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=4`);
            setImages(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        GetUsers();
    }, [page]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl text-center mb-8">Random Images</h1>
            {images.length < 1 ? (
                <h1 className="mt-3 text-center text-2xl">Please Wait Loading.....</h1>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {images.map(image => (
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4" key={image.id}>
                            <img className="rounded-full w-32 h-32 object-cover mb-4" src={image.download_url} alt={image.author} />
                            <p className="text-lg text-gray-800">{image.author}</p>
                        </div>
                    ))}
                </div>
            )}
            <div className="flex justify-center gap-4 mt-8">
                <button 
                    onClick={() => page > 1 && setPage(page - 1)} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Prev
                </button>
                <button 
                    onClick={() => setPage(page + 1)} 
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Miniproject;
