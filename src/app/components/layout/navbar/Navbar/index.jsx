

import { useDispatch } from "react-redux";


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold">
        Dashboard
      </h2>

      <button
        // onClick={() => dispatch(logout())}
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;