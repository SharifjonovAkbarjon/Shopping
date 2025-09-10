import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/jin.png";
import { FaRegHeart, FaRegUser, FaUserAlt } from "react-icons/fa";
import { BsCart, BsSearch } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Search = () => {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="border border-[rgba(224,218,218,0.85)] py-[10px]">
      <div className="flex justify-between container">
        <div className="flex items-center gap-[8px]">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <IoLocationOutline className="text-[20px]" />
          <p>Deliver to all</p>
        </div>

        <div className="flex items-center w-[869px] justify-between bg-[rgba(243,244,246,0.96)] px-[18px] py-[15px] rounded-[8px]">
          <input
            className="outline-none h-[25px] w-[90%] bg-transparent"
            type="text"
            placeholder="Search for products, categories or brands..."
          />
          <BsSearch className="text-[18px]" />
        </div>

        <div className="flex items-center gap-[15px]">
          {token ? (
            <NavLink to="/profile">
              <div className="flex items-center gap-[5px]">
                <FaUserAlt />
                <div className="flex flex-col text-[13px]">
                  <p>Profile</p>
                </div>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="flex items-center gap-[5px]">
                <FaRegUser />
                <div className="flex flex-col text-[13px]">
                  <p>Sign in</p>
                </div>
              </div>
            </NavLink>
          )}

          <NavLink to="/wishlist">
            <FaRegHeart />
          </NavLink>
          <NavLink to="/cart">
            <BsCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Search;
