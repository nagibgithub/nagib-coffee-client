import { NavLink } from "react-router-dom";

const Header = () => {

    const navBar = [
        { id: 1, title: "Home", path: "/" },
        { id: 1, title: "Add Coffee", path: "/add_coffee" },
    ]


    return (
        <>
            <div className="h-32 bg-[url('https://raw.githubusercontent.com/ProgrammingHero1/coffee-store-espresso-emporium/main/images/more/15.jpg')] flex justify-center items-center bg-no-repeat bg-cover">
                <img className="h-24" src="https://raw.githubusercontent.com/ProgrammingHero1/coffee-store-espresso-emporium/main/images/more/logo1.png" alt="" />
                <h1 className="font-rancho text-5xl text-white">Espresso Emporium</h1>
            </div>
            <div className="flex justify-center">
                {
                    navBar.map(pd => <NavLink key={pd.id} to={pd.path}>{pd.title}</NavLink>)
                }
            </div>
        </>
    );
};

export default Header;