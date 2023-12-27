
import BottomNav from "./BottomNav";
import UpNav from "./UpNav";


const Nav = () => {
  return (
    <>
      <nav className="w-full h-auto flex flex-col bg-white-secondary">
        <UpNav />
        <div className="hidden md:flex w-full h-auto flex-col bg-white-secondary">
        <BottomNav />
        </div>
      </nav>
    </>
  );
};

export default Nav;
