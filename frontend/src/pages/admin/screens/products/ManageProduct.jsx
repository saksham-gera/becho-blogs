import { images, stables } from "../../../../constants";
import { deleteProduct } from "../../../../services/index/products";
import Pagination from "../../../../components/Pagination";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";
import { getAllProducts } from "../../../../services/index/products";
import { useEffect } from "react";

const ManageProducts = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: productsData,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: getAllProducts,
    dataQueryKey: "products",
    deleteDataMessage: "Product is deleted",
    mutateDeleteFn: ({ id, token }) => deleteProduct({ id, token }),
  });

  return (
    <DataTable
      pageTitle="Manage Products"
      dataListName="Products"
      searchInputPlaceHolder="Product title..."
      searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
      searchKeywordOnChangeHandler={searchKeywordHandler}
      searchKeyword={searchKeyword}
      tableHeaderTitleList={["Title", "Category", "Created At", "Actions", ""]}
      isLoading={isLoading}
      isFetching={isFetching}
      data={productsData?.data}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      headers={productsData?.headers}
      userState={userState}
    >
      {productsData?.data?.map((product) => (
        <tr key={product?.id}>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href={product.link} className="relative block">
                  <img
                    src={product?.image_link || images.samplePostImage}
                    alt={product.title}
                    className="mx-auto object-cover rounded-lg w-10 aspect-square"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{product.title}</p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">{product.price}</p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
            <p className="text-gray-900 whitespace-no-wrap">
              {new Date(product.created_at).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </td>
          <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
            <button
              disabled={isLoadingDeleteData}
              type="button"
              className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() =>
                deleteDataHandler({
                  id: product?.id,
                  token: userState.userInfo.token,
                })
              }
            >
              Delete
            </button>
            <Link
              to={`/admin/products/manage/edit/${product?.id}`}
              className="text-green-600 hover:text-green-900"
            >
              Edit
            </Link>
          </td>
        </tr>
      ))}
    </DataTable>
  );
};

export default ManageProducts;