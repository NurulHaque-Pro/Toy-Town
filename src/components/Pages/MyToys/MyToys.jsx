import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, []);

    const handleDeleteToy = (_id) => {
        console.log('Try Delete', _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount) {
                            const remainingToys = toys.filter((toy) => toy._id !== _id);
                            setToys(remainingToys);
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

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
                        {toys.map((toy) => (
                            <tbody key={toy._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.toyPhotoURL} alt={toy.toyTitle} />
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
                                    <td className='flex justify-center gap-3'>
                                        <button className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3l6 6L10 21H3v-7l12-12zM15 3l6 6L10 21H3" />
                                            </svg>


                                        </button>
                                        <button onClick={() => { handleDeleteToy(toy._id) }} className="btn btn-circle btn-outline">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                        {/* foot */}
                        <tfoot></tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;
