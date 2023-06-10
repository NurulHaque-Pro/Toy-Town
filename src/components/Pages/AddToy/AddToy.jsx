import React, { useEffect } from 'react';

const AddToy = () => {


    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toyTitle = form.toyTitle.value;
        const toyPhotoURL = form.toyPhotoURL.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const toy = { name, email, toyTitle, toyPhotoURL, category, price, quantity, rating, description }
        // console.log(toy);


        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy added successfully');
                    form.reset();
                }
            })

    }



    return (
        <div className='my-10'>
            <div className="text-center mb-5">
                <h1 className="text-4xl font-bold">Upload Your Toy!</h1>
            </div>
            <div className="card flex-shrink-0 w-full mx-auto max-w-5xl shadow-2xl bg-base-100">

                <form onSubmit={handleAddToy} className="card-body">
                    <div className='grid gap-4 md:grid-cols-2'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input name='name' required type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Title</span>
                            </label>
                            <input name='toyTitle' required type="text" placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo URL</span>
                            </label>
                            <input name='toyPhotoURL' required type="text" placeholder="URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Toy Category</span>
                            </label>
                            <select name='category' className="select select-bordered w-full">
                                <option disabled selected>--- Select ---</option>
                                <option>Die-Cast Cars</option>
                                <option>Remote-Controlled (RC) Cars</option>
                                <option>Track Sets</option>
                                <option>Construction Vehicle Toys</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' required type="number" placeholder="$" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name='quantity' required type="number" placeholder="Ex: 25" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input name='rating' required type="text" placeholder="Ex: 4.5" className="input input-bordered" />

                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea rows='3' name='description' required placeholder="Write your toy short description..." className="textarea input-bordered" ></textarea>
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Toy</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;