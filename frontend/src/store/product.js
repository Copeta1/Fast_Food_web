import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProduct: (product) => set({ product }),
  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.description ||
      !newProduct.price ||
      !newProduct.image
    ) {
      return { success: false, message: "Please provide all fields." };
    }
    const res = await fetch("/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully." };
  },
  fetchProduct: async () => {
    const res = await fetch("/api/food");
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (productId) => {
    const res = await fetch(`/api/food/${productId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    //update UI when the product is deleted
    set((state) => ({
      products: state.products.filter((product) => product._id !== productId),
    }));
    return { success: true, message: "Product deleted successfully." };
  },

  updateProduct: async (productId, updateProduct) => {
    const res = await fetch(`/api/food/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    //update UI when the product is updated
    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  },
}));
