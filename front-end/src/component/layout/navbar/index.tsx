import { ShoppingCartRounded, PersonRounded } from "@mui/icons-material";
import useViewModel from "./viewModel";
const Navbar = () => {
  const { navigateToCart, navigateToHome } = useViewModel();
  return (
    <nav className="flex fixed top-0 left-0 bg-white text-indigo-900 w-full py-4 px-7 shadow-lg rounded-b-xl">
      <ul className="flex justify-between w-full">
        <li>
          <p className="my-auto" onClick={() => navigateToHome()}>
            THE Dress
          </p>
        </li>
        <li>
          <div className="flex gap-4">
            <ShoppingCartRounded
              fontSize="small"
              className="my-1"
              onClick={() => navigateToCart()}
            />
            <div className="rounded-full bg-indigo-900 text-white px-1">
              <PersonRounded fontSize="small" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
