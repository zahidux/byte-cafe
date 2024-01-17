import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { BsCamera } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import Swal from "sweetalert2";
import Lottie from "react-lottie-player";

import changePassImg from '../../assets/images/changePass.json';
import ChangePassword from "../../components/DashComponents/ChangePassword";

const MyProfileForm = () => {
    const { user, currentUser, profileUpdate, setLoading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [picture, setPicture] = useState(user?.photoURL);
    const [picLoading, setPicLoading] = useState(false);
    const [name, setName] = useState(user.displayName);
    const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);

    const { handleSubmit } = useForm();
    const onSubmit = () => {
        profileUpdate(user, name, picture)
            .then(() => {
                setLoading(false)
            })
        axiosSecure.patch(`/users/${currentUser.email}`, { name, phoneNumber })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Upload success!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setEditProfile(false)
                }
            })
    };

    // Image hosting
    const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    //   Picture upload
    const handlePictureUpload = async (event) => {
        const picture = event.target.files[0]
        const formData = new FormData();
        formData.append('image', picture);
        console.log(picture)
        try {
            setPicLoading(true)
            const response = await axios.post(image_hosting_url, formData);
            if (response.data.data.display_url) {
                setPicture(response.data.data.display_url);
                profileUpdate(user, user.displayName, response.data.data.display_url)
                    .then(() => {
                        setLoading(false)
                    })
                axiosSecure.put(`/users/${currentUser.email}?photo=${response.data.data.display_url}`)
                    .then(res => {
                        if (res.data.modifiedCount === 1) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Photo Uploaded!',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setPicLoading(false)
                        }
                    })
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            setPicLoading(false)
        }
    }
    return (
        <section className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="shadow-customMd p-4 rounded-lg">
                    <h1 className="text-xl font-semibold text-dark">Personal Details</h1>

                    <div className="mt-5">
                        <div className="h-40 w-40 relative mx-auto">
                            <img className="h-full w-full object-cover rounded-lg shadow-md" src={picture} alt="" />
                            {
                                picLoading && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex items-center justify-center bg-black/50 rounded-lg">
                                    <CgSpinner size='80' className="animate-spin text-lightWhite" />
                                </div>
                            }
                        </div>

                        {/* Upload your picture */}
                        <div className="mt-6 absolute md:static right-0 bottom-0">
                            <input
                                id="picture"
                                name="picture"
                                type="file"
                                accept="image/*"
                                onChange={handlePictureUpload}
                                className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
                            />
                            <button
                                type="button"
                                onClick={() => document.getElementById('picture').click()}
                                className="btn__primary_s w-full mt-6 justify-around"
                            >
                                Upload Photo

                                <BsCamera size='30' />
                            </button>
                        </div>
                    </div>

                    <div className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 md:gap-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="ID" className="text-sm text-gray underline">Student ID:</label>
                                <input
                                    id="ID"
                                    type="text"
                                    disabled
                                    className="text-dark border border-gray/40 w-full p-3 text-lg rounded-lg mt-1 outline-none focus:border-yellow cursor-not-allowed"
                                    defaultValue={'EHB105-1001'} />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm text-gray underline">Full Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-dark font-semibold border border-gray/40 w-full p-3 text-xl rounded-lg mt-1 outline-none focus:border-yellow"
                                    defaultValue={user?.displayName}
                                    placeholder="Full name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm text-gray underline">Email address:</label>
                                <input
                                    type="email"
                                    id="email"
                                    disabled
                                    className="text-dark border border-gray/40 w-full p-3 text-xl rounded-lg mt-1 outline-none focus:border-yellow cursor-not-allowed"
                                    defaultValue={user.email} placeholder="Email address" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="number" className="text-sm text-gray underline">Phone number:</label>
                                <input
                                    type="tel"
                                    id="number"
                                    className="text-dark border border-gray/40 w-full p-3 text-xl rounded-lg mt-1 outline-none focus:border-yellow"
                                    defaultValue={phoneNumber} placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                                {phoneNumber?.length !== 11 && <span className="text-red-400">Phone number must be 11 digits</span>}
                            </div>

                            <div className="text-right">
                                <button type="submit" disabled={phoneNumber?.length !== 11} className="btn__primary_s ml-auto"><span className="px-4">Save</span></button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="shadow-customMd p-4 rounded-lg overflow-hidden">
                    <h1 className="text-xl font-semibold text-dark">Change Password</h1>

                    <div className="mx-auto w-fit -my-10">
                        <Lottie loop animationData={changePassImg} play className="w-full" />
                    </div>

                    <ChangePassword />
                </div>
            </div>
        </section>
    );
};

export default MyProfileForm;