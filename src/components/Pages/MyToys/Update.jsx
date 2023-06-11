import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Provider/AuthProvider';

const Update = () => {

    const { user } = useContext(AuthContext)

    const myToys = useLoaderData();
    console.log(myToys);

    if (user.email !== myToys.email) {
        return (
            <div className='container grid py-40 items-center text-center'>
                <h2 className='text-3xl'>Unauthorized Access</h2>
                <p>Sorry, you do not have permission to access this resource.</p>
            </div>
        )
    }

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { price, quantity, description }

        fetch(`https://toy-town-server-nurulhaque-pro.vercel.app/toys/${myToys._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy uploaded successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>

            <div className='my-10'>
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-bold">Update Your Toy!</h1>
                </div>
                <div className="card flex-shrink-0 w-full mx-auto max-w-5xl shadow-2xl bg-base-100">

                    <form onSubmit={handleUpdateToy} className="card-body">
                        <div className='flex justify-between my-3'>
                            <h3>Product Name: <span className='underline text-primary'>{myToys.toyTitle}</span></h3>
                            <h3>Category: <span className='underline text-primary'>{myToys.category}</span></h3>
                        </div>
                        <div className='grid gap-4 md:grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input name='price' required type="number" placeholder="$" defaultValue={myToys.price} className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input name='quantity' required type="number" placeholder="Ex: 25" defaultValue={myToys.quantity} className="input input-bordered" />

                            </div>
                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea rows='3' name='description' required placeholder="Write your toy short description..." className="textarea input-bordered" defaultValue={myToys.description} ></textarea>
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update Toy</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Update;