import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <main>
        <section className="sidebar"></section>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default RootLayout;
