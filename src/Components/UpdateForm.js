import React, { useEffect, useState } from 'react'
import UserTable from './UserTable'

const UpdateForm = ({onSubmit, selectedUser, setSelectedUser, onFileSelect})=>{

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        file:null,
    })
    const [selectedFile, setSelectedFile] = useState(null)
    const [error, setError] = useState('')

    useEffect(()=>{
        if(selectedUser){
            setFormData({
                name:selectedUser.name,
                email:selectedUser.email,
                file:null
            })
        }
    }, [selectedUser])

    const validateFile =(file)=>{
        
        if(!file) return false
        const validTypes = ["images/jpg", "image/png", "image/webp"]

        if(!validTypes.includes(file.type)){
            setError("only jpeg and png and webp images are allowed")
            return false
        }

        if(file.size > 2 * 1024 * 1024){
            setError("file size must be 2mb")
            return false
        }
        setError("")
        return true

    }

    const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      if(file){
        setSelectedFile(file)
        onFileSelect(file)
      }
      if (validateFile(file)) {
        setFormData({ ...formData, file });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("All fields are required");
      return;
    }
    onSubmit(formData);
    setFormData({ name: "", email: "", file: null });
    setSelectedUser(null);
  };


    return(
        <>
         <section className=' bg-gray-100 border border-gray-300 mb-12 p-4'>
            <article className='container mx-auto'>
                <div className=''>
                    <h2 className='text-3xl text-slate-900 font-bold text-center'>Welcome to the user secrh the form</h2>
                </div>

                <div>
                    <form className='w-full bg-white rounded py-8 px-8 my-4 border border-gray-200'
                    onSubmit={handleSubmit}>
                        <div className='flex items-center gap-3 justify-center'>
                            <div>
                                <label for="name" className='block text-uppercase text-gray-700 text-sm font-bold mb-2'>
                                    Enter Name
                                </label>
                                <input type="text" placeholder='Enter Name' name='name' 
                                className='w-full p-3 border border-slate-200 rounded 
                                focus:outline-none' value={formData.name} onChange={handleChange} required />
                            </div>
                            <div>
                                <label className='block text-uppercase text-gray-700 text-sm font-bold mb-2' for="email">
                                    Enter Email
                                </label>
                                <input type="text" placeholder='Enter Email' name='email'
                                className='w-full p-3 border border-slate-200 rounded 
                                focus:outline-none' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="file-upload-wrapper">
      <label className="file-upload">
        <input type="file" onChange={handleChange} />
        <span className="file-upload-text">
          {selectedFile ? selectedFile.name : "Choose a file"}
        </span>
      </label>
      {selectedFile && (
        <div className="file-preview">
          {selectedFile.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="preview"
              className="preview-img"
            />
          )}
        </div>
      )}
    </div>
                            {error && <p className='text-red-900 text-xs'>{error}</p>}
                            <div className='mt-7'>
                                <button type='submit' className='w-full bg-cyan-500 px-8 text-white text-sm font-bold
                                 border border-slate-200 rounded p-3'>
                                    {selectedUser ? 'Update' : 'Add'} User
                                 </button>
                            </div>
                        </div>
                    </form>
                </div>
            </article>
         </section>
        </>
    )
}

export default UpdateForm