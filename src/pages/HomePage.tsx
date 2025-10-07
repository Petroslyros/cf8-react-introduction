import {Link, NavLink} from "react-router";

const Homepage = () => {
    return (
        <>
        <h1 className="text-2xl text-center my-12">Home Page</h1>
          <div className="text-center">
              <Link
              className="bg-gray-200 w-full px-4 py-2 rounded"
              to="/name-changer">Name changer example
              </Link>

              <NavLink
                  className="bg-gray-200 w-full px-4 py-2 rounded"
                  to="/name-changer">Name changer example
              </NavLink>
          </div>

        </>
    )
}

export default Homepage;