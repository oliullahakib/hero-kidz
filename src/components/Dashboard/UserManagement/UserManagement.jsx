"use client"
import React, { useState, useEffect } from 'react';
import { getAllUsers, updateUserRole, getBlocklist, toggleUserBlock } from '@/action/server/users';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [blocklist, setBlocklist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const [usersData, blockedEmails] = await Promise.all([
                getAllUsers(),
                getBlocklist()
            ]);
            setUsers(usersData);
            setBlocklist(blockedEmails);
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleRoleChange = async (userId, newRole) => {
        // Optimistic UI update
        const previousUsers = [...users];
        setUsers(users.map(user =>
            user._id === userId ? { ...user, role: newRole } : user
        ));

        const response = await updateUserRole(userId, newRole);
        if (!response.success) {
            // Revert changes if API fails
            setUsers(previousUsers);
            alert("Failed to update user role");
        }
    };

    const handleBlockToggle = async (email, isCurrentlyBlocked) => {
        // Optimistic UI update
        const previousBlocklist = [...blocklist];
        const newBlockStatus = !isCurrentlyBlocked;

        if (newBlockStatus) {
            setBlocklist([...blocklist, email]);
        } else {
            setBlocklist(blocklist.filter(e => e !== email));
        }

        const response = await toggleUserBlock(email, newBlockStatus);
        if (!response.success) {
            setBlocklist(previousBlocklist);
            alert(response.error || "Failed to update block status");
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-64"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">User Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                    <div key={user._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center hover:shadow-md transition-shadow">
                        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-primary/10">
                            <img
                                src={user.image || "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"}
                                alt={user.name || "User"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-1">{user.name || "Unknown User"}</h3>
                        <p className="text-sm text-gray-500 mb-4">{user.email}</p>

                        <div className="mt-auto w-full flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Current Role</span>
                                <span className={`text-sm font-semibold capitalize ${user.role === 'admin' ? 'text-primary' : 'text-gray-700'}`}>
                                    {user.role || 'user'}
                                </span>
                            </div>
                            <div className="flex gap-2">

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline btn-primary rounded-lg text-xs hover:text-white">
                                        Change
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow-lg bg-base-100 rounded-box w-32 border border-gray-100 mt-1">
                                        <li><button onClick={() => handleRoleChange(user._id, 'user')} className={user.role === 'user' ? 'active' : ''}>User</button></li>
                                        <li><button onClick={() => handleRoleChange(user._id, 'admin')} className={user.role === 'admin' ? 'active' : ''}>Admin</button></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <button
                            onClick={() => handleBlockToggle(user.email, blocklist.includes(user.email))}
                            className={`btn btn-sm text-xs w-full mt-2 ${blocklist.includes(user.email) ? 'btn-error text-white' : 'btn-outline btn-error hover:text-white'}`}
                        >
                            {blocklist.includes(user.email) ? 'Unblock' : 'Block'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserManagement;