import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    // console.log(toys);
    return (
        <div className='container mx-auto py-10'>
            <div className="text-center mb-10">
                <h1 className="text-4xl underline text-primary font-bold">My Toy!</h1>
            </div>
            <div>

                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead>
                            <tr className='text-lg'>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Action</th>
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
                                                    <img src={toy.toyPhotoURL} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>

                                            <span className="">{toy.toyTitle}</span>
                                        </td>
                                        <td>{toy.category}</td>
                                        <th>
                                            <span className="">${toy.price}</span>
                                        </th>
                                        <th className='flex gap-3'>
                                            <button className="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                            <button className="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </th>
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

export default MyToys;