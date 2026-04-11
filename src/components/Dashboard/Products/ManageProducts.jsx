"use client";

import { useState, useTransition, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";
import { addProduct, updateProduct, deleteProduct } from "@/action/server/products";
import { FaEdit, FaTrash, FaPlus, FaTimes } from "react-icons/fa";

const ManageProducts = ({ initialProducts = [] }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Sync prop with state in case of server revalidation
  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  const defaultForm = {
    title: "",
    bangla: "",
    image: "",
    price: "",
    discount: "",
    ratings: "5",
    reviews: "0",
    sold: "0",
    youtube: "",
    description: "",
    info: "", // We'll use comma separated string for UI
  };

  const [formData, setFormData] = useState(defaultForm);

  const openModalForAdd = () => {
    setFormData(defaultForm);
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (product) => {
    setFormData({
      ...product,
      info: product.info ? product.info.join(", ") : "",
    });
    setEditingId(product._id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData(defaultForm);
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Parse numeric and array fields
    const payload = {
        ...formData,
        price: parseFloat(formData.price) || 0,
        discount: parseFloat(formData.discount) || 0,
        ratings: parseFloat(formData.ratings) || 5,
        reviews: parseInt(formData.reviews) || 0,
        sold: parseInt(formData.sold) || 0,
        info: formData.info ? formData.info.split(",").map(i => i.trim()).filter(Boolean) : [],
    };

    let result;
    if (editingId) {
       result = await updateProduct(editingId, payload);
    } else {
       result = await addProduct(payload);
    }

    if (result.success) {
      Swal.fire({
        icon: "success",
        title: editingId ? "Updated!" : "Added!",
        text: "The product has been saved successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
      closeModal();
      startTransition(() => {
        router.refresh();
      });
    } else {
      Swal.fire("Error", result.message || "Failed to save product", "error");
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    });

    if (confirm.isConfirmed) {
      const result = await deleteProduct(id);
      if (result.success) {
        Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Product removed.",
            timer: 1500,
            showConfirmButton: false,
        });
        startTransition(() => {
          router.refresh();
        });
      } else {
        Swal.fire("Error", "Could not delete. Try again later.", "error");
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-base-100 p-6 rounded-2xl shadow-sm border border-base-200">
        <div>
           <h1 className="text-2xl font-bold text-base-content">Manage Products</h1>
           <p className="text-sm text-base-content/60">Upload, edit, and organize inventory</p>
        </div>
        <button onClick={openModalForAdd} className="btn btn-primary gap-2 h-auto py-3 px-6 rounded-xl">
          <FaPlus /> Add New Product
        </button>
      </div>

      {/* Grid of Product Cards */}
      {isPending && <div className="text-center py-10"><span className="loading loading-spinner loading-lg text-primary"></span></div>}
      
      {!isPending && products.length === 0 && (
         <div className="text-center py-20 bg-base-100 rounded-2xl border border-base-200 shadow-sm">
            <p className="text-lg text-base-content/60 font-medium">No products found. Start adding some!</p>
         </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow group">
            <figure className="relative h-56 w-full bg-base-200 p-4">
              <Image 
                src={product.image || "https://i.ibb.co.com/MxfwC02d/logo.png"} 
                alt={product.title} 
                fill 
                className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
              />
              {product.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-error text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                      {product.discount}% OFF
                  </div>
              )}
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title text-lg font-bold leading-tight line-clamp-1">{product.title}</h2>
              <div className="flex items-center justify-between mt-2">
                 <div className="font-bold text-primary text-xl">৳{product.price}</div>
                 <div className="text-xs font-medium text-base-content/50 bg-base-200 px-2 py-1 rounded-full">{product.sold} Sold</div>
              </div>
              
              <div className="card-actions justify-end mt-4 pt-4 border-t border-base-200">
                <button onClick={() => openModalForEdit(product)} className="btn btn-sm btn-ghost text-info hover:bg-info/10">
                   <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete(product._id)} className="btn btn-sm btn-ghost text-error hover:bg-error/10">
                   <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit using standard state instead of pure DaisyUI checkbox to control forms easily */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 p-4 overflow-y-auto backdrop-blur-sm">
          <div className="bg-base-100 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden my-8 animate-fade-in-up flex flex-col max-h-[90vh]">
            
            <div className="flex justify-between items-center p-6 border-b border-base-200 bg-base-200/30">
               <h3 className="text-xl font-bold">{editingId ? 'Edit Product' : 'Add New Product'}</h3>
               <button onClick={closeModal} className="btn btn-circle btn-ghost btn-sm"><FaTimes/></button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
               <form id="productForm" onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Basic Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">English Title *</span></label>
                       <input required type="text" name="title" value={formData.title} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" placeholder="Educational Wooden Toy" />
                     </div>
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Bangla Title</span></label>
                       <input type="text" name="bangla" value={formData.bangla} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" placeholder="শিক্ষণীয় কাঠের খেলনা" />
                     </div>
                  </div>

                  {/* Media */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Image URL *</span></label>
                       <input required type="text" name="image" value={formData.image} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" placeholder="https://i.ibb.co..." />
                     </div>
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">YouTube Demo URL</span></label>
                       <input type="text" name="youtube" value={formData.youtube} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" placeholder="https://youtube.com/..." />
                     </div>
                  </div>

                  {/* Pricing and Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Price (৳) *</span></label>
                       <input required type="number" step="0.01" name="price" value={formData.price} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" />
                     </div>
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Discount (%)</span></label>
                       <input type="number" name="discount" value={formData.discount} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" />
                     </div>
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Sold Count</span></label>
                       <input type="number" name="sold" value={formData.sold} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" />
                     </div>
                     <div className="form-control w-full">
                       <label className="label"><span className="label-text font-medium">Ratings</span></label>
                       <input type="number" step="0.1" max="5" name="ratings" value={formData.ratings} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" />
                     </div>
                  </div>

                  <div className="form-control w-full">
                      <label className="label"><span className="label-text font-medium">Key Features (comma separated)</span></label>
                      <input type="text" name="info" value={formData.info} onChange={handleInputChange} className="input input-bordered focus:border-primary w-full" placeholder="Safe materials, Educational, Built to last..." />
                  </div>

                  <div className="form-control w-full">
                     <label className="label"><span className="label-text font-medium">Full Description</span></label>
                     <textarea name="description" value={formData.description} onChange={handleInputChange} className="textarea textarea-bordered focus:border-primary h-32 w-full" placeholder="Detailed product description..."></textarea>
                  </div>
               </form>
            </div>
            
            <div className="p-6 border-t border-base-200 bg-base-100 flex justify-end gap-3">
               <button type="button" onClick={closeModal} className="btn btn-ghost">Cancel</button>
               <button type="submit" form="productForm" className="btn btn-primary px-8">Save Product</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;