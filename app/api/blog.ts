import axios from "axios";
import { NextResponse } from "next/server";

// ---------------- POST NEW BLOG ----------------
export async function postBlog(data: {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
}) {
  try {
    const response = await axios.post("/api/blogs", data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error posting blog:", error);
    throw new Error("Failed to post blog");
  }
}

// ---------------- GET BLOG BY ID ----------------
export async function getByID(id: string) {
  try {
    const response = await axios.get(`/api/blogs/${id}`);
    if (!response.data) throw new Error("Blog not found");
    return response.data;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    throw new Error("Blog not found");
  }
}

// ---------------- GET ALL BLOGS ----------------
export async function getAllblogs() {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
}

// Optional helper
export const fetchblogs = async () => {
  try {
    const response = await axios.get("/api/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs", error);
    return [];
  }
};

// ---------------- UPLOAD IMAGE TO CLOUDINARY ----------------
export async function postImage(imageFile: File) {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "your_upload_preset"); // Replace with your preset

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dcn24jfwx/image/upload",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    return response.data; // secure_url, public_id, etc.
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Image upload failed");
  }
}

// ---------------- UPDATE BLOG BY ID ----------------
export async function updateBlogByID(id: string, data: any) {
  try {
    const response = await axios.put(`/api/blogs/${id}`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating blog:", error);
    throw new Error("Failed to update blog");
  }
}

// ---------------- DELETE BLOG BY ID ----------------
export async function deleteBlogByID(id: string) {
  try {
    const response = await axios.delete(`/api/blogs/${id}`);
    if (response.status !== 200) {
      throw new Error("Failed to delete blog");
    }
    return response.data;
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new Error("Failed to delete blog");
  }
}
