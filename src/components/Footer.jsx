import React from 'react';

export default function App() {
  return (

    <footer className="bg-orange-500 text-center text-white dark:bg-neutral-600">
        {/* <!--Copyright section--> */}
        <div
            className="bg-orange-500 text-center text-white dark:bg-neutral-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy;{(new Date().getFullYear())} <a href="https://flowbite.com" target="_blank" className="hover:underline">Aluve Calendar App</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
  );
}