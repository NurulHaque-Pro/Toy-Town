import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const ShopByCategory = () => {
    const { user, loading } = useContext(AuthContext);
    const [selectedCategory, setSelectedCategory] = useState('Die-Cast Cars');
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-town-server-nurulhaque-pro.vercel.app/toys/category/${selectedCategory}`)
            .then((res) => res.json())
            .then((data) => setToys(data));
    }, [selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const location = useLocation();
    const navigate = useNavigate();

    const loginAlert = (toyId) => {

        Swal.fire({
            title: 'Not Logged In?',
            text: 'You have to log in first to view details.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Log In',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login', {
                    state: {
                        from: {
                            pathname: `/toyInfo/${toyId}`,
                            search: location.search,
                            hash: location.hash,
                        },
                    },
                });
            }
        });
    };


    const categoryToys = <>
        {
            loading ?
                <div className='min-h-screen text-center mt-14'>
                    <div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]' role='status'>
                        <span className='absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0' style={{ clip: 'rect(0,0,0,0)' }}>
                            Loading...
                        </span>
                    </div>
                </div>
                :
                <div className='grid md:grid-cols-4 gap-10'>
                    {toys.map((toy) => (
                        <div key={toy._id} className=''>
                            <figure className='px-10 pt-10'>
                                <img src={toy.toyPhotoURL} alt='Die-Cast Cars' className='w-[225px] h-[225px] mx-auto' />
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h2 className='card-title font-extralight text-base'>{toy.toyTitle}</h2>
                                <p>Price: ${toy.price}</p>
                                <p>Rating: {toy.rating}</p>
                                <div className='card-actions'>
                                    {user ? (
                                        <Link
                                            to={`/toyInfo/${toy._id}`}
                                            className='font-medium btn btn-primary hover:bg-transparent hover:text-primary py-2 px-11'
                                        >
                                            Details
                                        </Link>
                                    ) : (
                                        <button
                                            className='font-medium btn btn-primary hover:bg-transparent hover:text-primary py-2 px-11'
                                            onClick={() => { loginAlert(toy._id) }}
                                        >
                                            Details
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        }
    </>

    return (
        <div className='container mx-auto py-12'>
            <div className='container mx-auto'>
                <div className='text-center mb-10'>
                    <h1 className='text-4xl underline text-primary'>Shop By Category</h1>
                </div>
            </div>
            <div>
                <Tabs>
                    <TabList className='text-center border-b'>
                        <Tab onClick={() => handleCategoryClick('Die-Cast Cars')}>Die-Cast Cars</Tab>
                        <Tab onClick={() => handleCategoryClick('Remote-Controlled (RC) Cars')}>Rc Cars</Tab>
                        <Tab onClick={() => handleCategoryClick('Track Sets')}>Track Sets</Tab>
                        <Tab onClick={() => handleCategoryClick('Toy Truck')}>Toy Truck</Tab>
                        <Tab onClick={() => handleCategoryClick('Construction Vehicle Toys')}>Construction Vehicle Toys</Tab>
                    </TabList>

                    <TabPanel>
                        {categoryToys}
                    </TabPanel>
                    <TabPanel>
                        {categoryToys}
                    </TabPanel>
                    <TabPanel>
                        {categoryToys}
                    </TabPanel>
                    <TabPanel>
                        {categoryToys}
                    </TabPanel>
                    <TabPanel>
                        {categoryToys}
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;
