function Navbar({ setStage }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-48 bg-gray-900 shadow-lg flex flex-col p-4 space-y-4">
      <h1 className="text-xl font-bold text-green-400 mb-6">🏏 Stay Untamed</h1>

      <button
        onClick={() => setStage("menu")}
        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
      >
        Home
      </button>

      <button
        onClick={() => setStage("inventory")}
        className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-lg"
      >
        My Collection
      </button>

      <button
        onClick={() => setStage("profile")}
        className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-lg"
      >
        Profile
      </button>
    </aside>
  );
}

export default Navbar;
