import axios from 'axios';
import { NextResponse } from 'next/server';

export async function postBlog(data: {  name: string; description: string; price: number; image: string; category: string; stock: number; rating: number; reviews: number; }){
  const response = await axios.post('/api/blogs', data, {
    headers: {
      'Content-Type': 'application/json'
  }

  })
  return response.data;

}

export async function getByID(id:string){
  try {

    const response = await axios.get(`/api/blogs/${id}`);
    if (!response.data) {
      throw new Error("Blog not found");
    }
    return response.data;

    
  } catch (error) {
    
    console.error("Error fetching product by ID:", error);
    throw new Error("Blog not found");

  }
}


export async function getAllblogs(){
   const response = await axios.get("/api/blogs")

   
   return response.data


}

 const fetchblogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        return response.data
      } catch (error) {
        console.error("Blogs not found", error);
      }
    };

    export {fetchblogs}

export async function postImage(imageFile: File) {
  // Create FormData and append file + upload_preset
  const formData = new FormData();
  formData.append('file', imageFile);
  formData.append('upload_preset', 'your_upload_preset'); // Replace with your preset name

  const response = await axios.post(
    'https://api.cloudinary.com/v1_1/dcn24jfwx/image/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data; // This contains secure_url, public_id, etc.
}







export async function updateBlogByID(id: string, data: any) {
  try {
    const response = await axios.put(`/api/blogs/${id}`, data , {
      headers: {
        'Content-Type': 'application/json',
      },
    }); // ✅ PUT for update
    return response.data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw new Error('Failed to update blog');
  }
}



export async function deleteBlogByID(id: string){

  try {

    const response = await axios.delete(`/api/blogs/${id}`);
    if (response.status !== 200) {
      throw new Error('Failed to delete delete');
    }

    return response.data; 

    
  } catch (error) {


    console.error("Error deleting blog:", error);
    NextResponse.json({"message": "Failed to delete blog"}, { status: 500 });
    
  }

}

