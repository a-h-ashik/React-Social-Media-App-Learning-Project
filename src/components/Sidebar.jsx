function Sidebar({ tab, func }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => func.tabChange("Home")}>
            <a
              href="#"
              className={`nav-link text-white ${
                tab === "Home" ? "active" : null
              }`}
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li onClick={() => func.tabChange("Create Post")}>
            <a href="#" className={`nav-link text-white ${
                tab === "Create Post" ? "active" : null
              }`}>
              Create Post
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}

export default Sidebar;
