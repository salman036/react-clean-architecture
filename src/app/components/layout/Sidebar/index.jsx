import SidebarItem from '../SidebarItem'

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen border-r bg-white p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>

      <nav className="space-y-2">
        {sidebarLinks.map((item) => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar