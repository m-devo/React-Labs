import { useState } from "react";
import usersData from "../../data/users.json";
import type { User } from "./UserList"; 

const UsersList = () => {
  const [allUsers] = useState<User[]>(usersData as User[]);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>(usersData as User[]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const roleStyle = (role: string = ""): string => {
    switch (role) {
      case "admin":
        return "bg-red-500 text-white";
      case "moderator":
        return "bg-yellow-400 text-black";
      case "user":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-200 text-black";
    }
  }

  const searchFn = () => {
    if (searchTerm === "") return;

    const filtered = allUsers.filter((user) => {
      const userEmail = user.email?.toLowerCase() ?? "";
      return userEmail.includes(searchTerm.toLowerCase())
    })

    setDisplayedUsers(filtered);
    setIsSearched(true);
  };

  const resetFn = () => {
    setDisplayedUsers(allUsers);
    setSearchTerm("");
    setIsSearched(false);
  };

  const inputChangeFn = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
  };

  return (
    <section className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-red-600 mb-8">Users List</h1>
        {/* search bar */}
      <div className="flex items-center gap-4 mb-8 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col gap-1 w-full max-w-md">
          <label className="font-semibold text-gray-700">Users</label>
          <input
            type="text"
            placeholder="Search by email..."
            className="border border-gray-300 rounded p-2 focus:outline-none focus:border-indigo-500"
            value={searchTerm}
            onChange={inputChangeFn}/>
        </div>
            {/* search button */}
        <div className="mt-7 flex gap-2">
            <button
            onClick={searchFn}
            className="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800 transition">
            Search
            </button>
            {isSearched && (
            <button
                onClick={resetFn}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition">
                Reset
            </button>
            )}
        </div>
      </div>
      {/* mapping the users id - username - image, useremail, phone, birth date and "rol" */}
    <div className="grid grid-cols-4 lg:grid-cols-4 gap-6">
        {displayedUsers.map((user, i) => (
          <div
            key={user.id || i} 
            className="bg-gray-100 rounded-3xl p-6 flex flex-col items-center text-center shadow-md border border-gray-200">
            <img
              src={user.image}
            alt={user.username || "User"}
              className="w-24 h-24 rounded-full bg-white mb-4 object-cover border-2 border-gray-300"/>

            <span
              className={`px-4 py-1 rounded-full text-sm font-bold mb-4 ${roleStyle(user.role)}`}>
                {user.role}
            </span>
            <div className="space-y-1 text-sm text-gray-600 w-full">
              <p className="font-bold text-lg text-gray-800">{user.username}</p>
              <p className="text-gray-500 text-xs break-all">{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.birthDate}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UsersList;