import Counter from "./components/Counter";
import UserObj from "./components/UserObj";
import ItemsList from "./components/ItemsList";
import FruitSearch from "./components/FruitSearch";
import OTPGenerator from "./components/OTPGenerator";

export default function App() {
  return (
    <div
      id="main"
      className="space-y-8 flex flex-col justify-center items-center text-center py-2.5">
      <h1>Counter</h1>
      <Counter />

      <h1>User Profile: Updating an Object</h1>
      <UserObj />

      <h1>List: Updating an Array</h1>
      <ItemsList />

      <h1>Search: useEffect and API call</h1>
      <FruitSearch />

      <h1>OTP Generator: useEffect and timers</h1>
      <OTPGenerator />
    </div>
  );
}
