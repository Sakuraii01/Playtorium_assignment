import { AddShoppingCartRounded } from "@mui/icons-material";
import useViewModel from "./viewModel";
import Layout from "../../component/layout";
const Home = () => {
  const { item } = useViewModel();
  return (
    <Layout>
      <h1>What is your outfit Today?</h1>
      <div className="my-2 bg-white shadow-lg rounded-2xl w-full h-40"></div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {item.map((item) => {
          return (
            <div key={item.id}>
              <div className="my-2 bg-white rounded-2xl w-full h-36 lg:h-44 shadow-lg"></div>
              <div className="flex justify-between">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} THB</p>
                </div>
                <AddShoppingCartRounded
                  fontSize="small"
                  className="text-indigo-700 mt-auto mr-3 my-1"
                />
              </div>
            </div>
          );
        }) || (
          <div>
            <h3>Our Product Comming Soon!</h3>
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Home;
