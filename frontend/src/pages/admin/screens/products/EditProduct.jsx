import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getSingleProduct, updateProduct } from "../../../../services/index/products";
import { useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../articleDetail/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const EditProducts = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [ratings, setRatings] = useState("");
  const [discount, setDiscount] = useState("");
  const [link, setLink] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getSingleProduct({ id }),
    queryKey: ["products", id],
    onSuccess: (data) => {
      setPhoto(data.image_link);
      setTitle(data.title);
      setDescription(data.description);
      setPrice(data.price);
      setRatings(data.ratings);
      setDiscount(data.discount);
      setLink(data.link);
      setCategoryId(data.category_id);
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: mutateUpdateProduct,
    isLoading: isLoadingUpdateProduct,
  } = useMutation({
    mutationFn: (updatedData) => {
      return updateProduct({
        updatedData,
        id,
        token: userState.userInfo.token,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products", id]);
      toast.success("Product updated successfully");
      navigate(`/admin/products/manage`, { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setPhoto(URL.createObjectURL(selectedFile)); // Set the temporary URL
      setFile(selectedFile); // Keep the actual file for backend upload
    }
  };

  const handleUpdateProduct = () => {
    const updatedData = {
      title,
      description,
      price,
      ratings,
      discount,
      link,
      image_link: photo,
      image: file,
      category_id: categoryId,
    };

    mutateUpdateProduct(updatedData);
  };

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the product details" />
      ) : (
        <section className="container mx-auto max-w-5xl px-5 py-5">
          <div>
            <label htmlFor="productPicture" className="block mb-2">
              Product Image
            </label>
            <div className="mb-4">
              {photo ? (
                <img
                  src={photo}
                  alt="Selected"
                  className="rounded-xl w-full"
                />
              ) : (
                <div className="w-full min-h-[200px] bg-gray-200 flex justify-center items-center">
                  <HiOutlineCamera className="w-7 h-auto text-gray-500" />
                </div>
              )}
            </div>
            <input
              type="file"
              id="productPicture"
              onChange={handleFileChange}
              className="mb-4"
              accept="image/*"
            />
            <div>
              <label htmlFor="title" className="block mb-2">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product title"
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product description"
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2">
                Price
              </label>
              <input
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product price"
              />
            </div>
            <div>
              <label htmlFor="ratings" className="block mb-2">
                Ratings
              </label>
              <input
                id="ratings"
                value={ratings}
                onChange={(e) => setRatings(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product ratings"
              />
            </div>
            <div>
              <label htmlFor="discount" className="block mb-2">
                Discount
              </label>
              <input
                id="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product discount"
              />
            </div>
            <div>
              <label htmlFor="link" className="block mb-2">
                Product Link
              </label>
              <input
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Product link"
              />
            </div>
            <div>
              <label htmlFor="categoryId" className="block mb-2">
                Category ID
              </label>
              <input
                id="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Category ID"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdateProduct}
              disabled={isLoadingUpdateProduct}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded disabled:opacity-70"
            >
              Update Product
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default EditProducts;