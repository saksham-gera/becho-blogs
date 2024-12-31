import React from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useDataTable } from "../../../../../hooks/useDataTable";
import {
  deleteAppUser,
  updateProfile,
  getAllAppUsers,
  sendNotification, // Import the new service function for sending notifications
} from "../../../../../services/index/users";
import DataTable from "../../../components/DataTable";
import { images, stables } from "../../../../../constants";

const AppUsers = () => {
  const {
    userState,
    currentPage,
    searchKeyword,
    data: allAppUsers,
    isLoading,
    isFetching,
    isLoadingDeleteData,
    queryClient,
    searchKeywordHandler,
    submitSearchKeywordHandler,
    deleteDataHandler,
    setCurrentPage,
  } = useDataTable({
    dataQueryFn: getAllAppUsers,
    dataQueryKey: "appUsers",
    deleteDataMessage: "User has been deleted",
    mutateDeleteFn: ({ id, token }) => {
      return deleteAppUser({ id, token });
    },
  });

  // Mutation for updating admin status
  const { mutate: mutateUpdateUser, isLoading: isLoadingUpdateUser } =
    useMutation({
      mutationFn: ({ isAdmin, userId }) => {
        return updateProfile({
          token: userState.userInfo.token,
          userData: { admin: isAdmin },
          userId,
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["appUsers"]);
        toast.success("User has been updated");
      },
      onError: (error) => {
        toast.error(`Error updating user: ${error.message}`);
        console.error(error);
      },
    });

  // Mutation for sending notifications
  const { mutate: mutateNotifyUser, isLoading: isLoadingNotifyUser } =
    useMutation({
      mutationFn: ({ userId, title, description }) => {
        return sendNotification({
          token: userState.userInfo.token,
          userId,
          title,
          description, // Pass description instead of message
        });
      },
      onSuccess: () => {
        toast.success("Notification sent successfully!");
      },
      onError: (error) => {
        toast.error(`Error sending notification: ${error.message}`);
        console.error(error);
      },
    });

  const handleAdminCheck = (event, userId) => {
    const initialCheckValue = !event.target.checked;

    if (window.confirm("Do you want to change the admin status of this user?")) {
      mutateUpdateUser({ isAdmin: event.target.checked, userId });
    } else {
      event.target.checked = initialCheckValue;
    }
  };

  const handleNotifyUser = (userId) => {
    const title = prompt("Enter the notification title:", "Important Update");
    const description = prompt("Enter the notification description:", "Your account has been updated.");

    // Ensure title and description are non-empty before sending the notification
    if (title && description) {
      // Only send notification if the title and description are provided
      console.log("Sending notification:", { title, description }); // Debugging log
      mutateNotifyUser({ userId, title, description });
    } else {
      toast.error("Both title and description are required.");
    }
  };

  // Function to send a broadcast notification to all users
  const handleBroadcastNotification = () => {
    const title = prompt("Enter the notification title:", "System Update");
    const description = prompt("Enter the notification description:", "This is a broadcast message to all users.");

    if (title && description) {
      // Send a broadcast notification to all users (no userId needed)
      mutateNotifyUser({ userId: null, title, description });
    } else {
      toast.error("Both title and description are required for the broadcast.");
    }
  };

  return (
    <>
      <DataTable
        pageTitle="Manage App Users"
        dataListName="App Users"
        searchInputPlaceHolder="User's email..."
        searchKeywordOnSubmitHandler={submitSearchKeywordHandler}
        searchKeywordOnChangeHandler={searchKeywordHandler}
        searchKeyword={searchKeyword}
        tableHeaderTitleList={[
          "Name",
          "Email",
          "Created At",
          "Verified",
          "Admin",
          "Actions",
        ]}
        isLoading={isLoading}
        isFetching={isFetching}
        data={allAppUsers?.users || []} // Default to an empty array
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        headers={allAppUsers?.headers}
        userState={userState}
      >
        {(allAppUsers?.users || []).map((user) => (
          <tr key={user.id}>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="relative block">
                    <img
                      src={
                        user?.avatar
                          ? stables.UPLOAD_FOLDER_BASE_URL + user?.avatar
                          : images.userImage
                      }
                      alt={user.username}
                      className="mx-auto object-cover rounded-lg w-10 aspect-square"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">{user.username}</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">
                {new Date(user.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p className="text-gray-900 whitespace-no-wrap">{user.verified ? "✅" : "❌"}</p>
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <input
                type="checkbox"
                className="d-checkbox"
                defaultChecked={user.admin}
                onChange={(event) => handleAdminCheck(event, user.id)}
                disabled={isLoadingUpdateUser}
              />
            </td>
            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
              <button
                disabled={isLoadingDeleteData}
                type="button"
                className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={() => {
                  deleteDataHandler({
                    id: user.id,
                    token: userState.userInfo.token,
                  });
                }}
              >
                Delete
              </button>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-900 disabled:opacity-70 disabled:cursor-not-allowed"
                onClick={() => handleNotifyUser(user.id)}
              >
                Notify
              </button>
            </td>
          </tr>
        ))}
      </DataTable>

      {/* Fixed Broadcast Button */}
      <button
        onClick={handleBroadcastNotification}
        className="fixed bottom-10 right-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        Broadcast Notification
      </button>
    </>
  );
};

export default AppUsers;
