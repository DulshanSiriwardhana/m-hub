export const ClosedNav = () => {
  return <div>closed</div>;
};
export const OpenedNav = () => {
  return <div>opened</div>;
};

const NavBar = () => {
  return (
    <div className="bg-red-500 w-screen flex items-center">
      <div className="w-full max-w-boundary mx-auto border border-white h-20">
        <div className="invisible md:visible">
          <OpenedNav />
        </div>
        <div className="visible md:invisible">
          <ClosedNav />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
