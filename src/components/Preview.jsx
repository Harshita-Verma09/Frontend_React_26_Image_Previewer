import React, { useState, useEffect } from "react";

const FileUploadPreview = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectURL = URL.createObjectURL(file);
            setImage(objectURL);
        }
    };

    useEffect(() => { 
        return () => {
            if (image) {
                URL.revokeObjectURL(image); // 🛠 Free memory when the component unmounts or image changes
            }
        };
    }, [image]);
    return (
        <div className="flex flex-col bg-black text-white justify-center items-center min-h-screen px-4 gap-5">
            {image && (
                <div className="bg-white rounded-full flex flex-col items-center justify-center shadow-lg ">
                    <img
                        src={image}
                        alt="Preview"
                        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full m-[0.8px]"
                    />
                </div>
            )}
            <input
                className="border border-white p-3 text-center rounded-md cursor-pointer bg-gray-800 w-full max-w-sm"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 w-full max-w-sm"
                onClick={() => alert("Image Submitted!")}
            >
                Submit
            </button>
        </div>
    );
};

export default FileUploadPreview;
