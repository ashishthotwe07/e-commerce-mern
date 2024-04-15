import React, { useState } from "react";
import OAuth from "../components/OAuth";
import { FiPlus } from "react-icons/fi";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    photo: null, // Include photo in form data state
  });

  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file, 
    }));

    const reader = new FileReader();
    reader.onload = (event) => {
      setPhotoPreview(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an Account
              </h1>
              <OAuth />
              <div className="w-full text-center">
                <p>Or</p>
              </div>
              <hr />

              <form
                className="space-y-4 md:space-y-6"
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                  <input
                    type="file"
                    id="photoInput"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />

                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-center"
                    htmlFor="photoInput"
                  >
                    Profile Photo <span className="text-red-600"> </span>
                  </label>

                  <div className="text-center">
                    <label htmlFor="photoInput" className="cursor-pointer">
                      <div className="relative w-20 h-20 m-auto rounded-full shadow">
                        {photoPreview ? (
                          <img
                            src={photoPreview}
                            className="w-full h-full border-2 border-gray-500 rounded-full object-cover"
                            alt="Profile"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full rounded-full bg-gray-200">
                            <FiPlus className="text-gray-600 w-10 h-10" />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Enter Your Username"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                    placeholder="Enter Your email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-600 hover:bg-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-800 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="signin"
                    className="font-medium text-gray-600 hover:underline dark:text-gray-500"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
