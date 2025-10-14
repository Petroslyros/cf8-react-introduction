import {Link} from "react-router";
import {useEffect} from "react";

const Homepage = () => {
    const links = [
        {path: "/", label: "Home Page"},
        {path: "/name-changer", label: "Name Changer example"},
        {path: "/examples/timer", label: "Timer Example"},
        {path: "/examples/controlled-input", label: "Controlled Input Example"},
        {path: "/examples/uncontrolled-input", label: "Uncontrolled Input Example"},
        {path: "/examples/multifield-form", label: "Multifield Form Example"}
    ];

    useEffect(() => {
        document.title = "CF8 Home Page";
    }, []);


    return (
        <>
        <h1 className="text-2xl text-center my-12">Home Page</h1>
          <div className="text-center">
              {links.map((link) => (
                  <Link
                  key={link.path}
                  to={link.path}
                  className="bg-gray-200 w-full px-4 py-2 rounded" >
                      {link.label}
                  </Link>
              ))}
              <Link
              className="bg-gray-200 w-full px-4 py-2 rounded"
              to="/examples/name-changer">Name changer example
              </Link>


          </div>

        </>
    )
}

export default Homepage;