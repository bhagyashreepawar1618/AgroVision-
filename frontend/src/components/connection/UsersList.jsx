import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("accessToken");

      const res = await axios.get(
        "http://localhost:5000/api/v1/users/get-all-users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("All users =", res.data);

      // Assuming your ApiResponse is:
      // { statusCode, data, message }
      setUsers(res.data.data);
    } catch (error) {
      console.log("Error occurred while getting all users", error);

      setError(
        error.response?.data?.message ||
          "Unable to fetch users. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="font-semibold uppercase tracking-wider text-emerald-600">
            Community
          </p>

          <h1 className="mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            All Users
          </h1>

          <p className="mt-3 text-slate-500">
            Connect with other users and start a conversation.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-500"></div>

              <p className="mt-4 font-medium text-slate-500">
                Loading users...
              </p>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-600">
            {error}
          </div>
        )}

        {/* No Users */}
        {!loading && !error && users.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center shadow-lg">
            <p className="text-lg font-semibold text-slate-700">
              No users found.
            </p>
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && users.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Profile */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <img
                      src={
                        user.profile ||
                        "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(user.fullname)
                      }
                      alt={user.fullname}
                      className="h-24 w-24 rounded-full border-4 border-emerald-100 object-cover shadow-md"
                    />

                    {/* Online indicator */}
                    <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
                  </div>

                  {/* Name */}
                  <h2 className="mt-5 text-xl font-bold text-slate-800">
                    {user.fullname}
                  </h2>

                  {/* Username */}
                  <p className="mt-1 text-sm text-emerald-600">
                    @{user.username}
                  </p>

                  {/* Email */}
                  <p className="mt-3 w-full truncate text-sm text-slate-500">
                    {user.email}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100"></div>

                {/* User Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">User ID</span>
                    <span className="font-semibold text-slate-700">
                      #{user.id}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Joined</span>
                    <span className="font-medium text-slate-600">
                      {new Date(user.createdAt).toLocaleDateString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Message Button */}
                <button
                  type="button"
                  onClick={() => {
                    console.log("Message user:", user.id);
                  }}
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  💬 Message
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersList;
