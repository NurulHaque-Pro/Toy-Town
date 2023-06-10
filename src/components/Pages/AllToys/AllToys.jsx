import React, { useEffect, useState } from 'react';

const AllToys = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys);
    return (
        <div className='container mx-auto py-10'>
            <div className="text-center mb-10">
                <h1 className="text-4xl text-primary underline font-bold">All Toys</h1>
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-base'>
                                <th><h3>Image</h3></th>
                                <th><h3>Title</h3></th>
                                <th><h3>Seller</h3></th>
                                <th><h3>Category</h3></th>
                                <th><h3>Price</h3></th>
                                <th><h3>Quantity</h3></th>
                                <th><h3>Action</h3></th>
                            </tr>
                        </thead>
                        {
                            toys.map(toy => (
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>

                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={toy?.toyPhotoURL} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <span className="">{toy?.toyTitle}</span>
                                        </td>
                                        <td>
                                            {toy.name}
                                            <br />
                                            <span className="">{toy?.email}</span>
                                        </td>
                                        <td>{toy?.category}</td>
                                        <td>
                                            <span className="">${toy?.price}</span>
                                        </td>
                                        <td>
                                            <span className="">{toy?.quantity} Pieces</span>
                                        </td>
                                        <td className='flex gap-3'>
                                            <button className="btn btn-outline btn-primary">
                                               Details
                                            </button>
                                        </td>
                                    </tr>

                                </tbody>
                            ))
                        }
                        {/* foot */}
                        <tfoot>
                        </tfoot>

                    </table>
                </div>


            </div>
        </div>
    );
};

export default AllToys;