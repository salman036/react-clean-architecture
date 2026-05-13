import { NavLink } from "react-router-dom";

const SidebarItem = ({ item }) => {
    return (
        <NavLink
            to={item.path}
            className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition-all ${isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
            }
        >
            {item.title}
        </NavLink>
    )
}

export default SidebarItem