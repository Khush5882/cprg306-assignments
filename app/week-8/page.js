"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = () => {
    gitHubSignIn(); // Or any other authentication method provided by useUserAuth
  };

  const handleSignOut = () => {
    firebaseSignOut(); // Or any other sign out method provided by useUserAuth
  };

  return (
    <div className="container mx-auto my-8 p-4">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <Link className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" href="/week-8/shopping-list">
              Shopping List
          </Link>
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in to access the Shopping List information.</p>
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out" onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}