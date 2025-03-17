import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import useMemeStore from "../store/formStore";

const ProtectedPageComponent = () => {
  const { getMemes } = useMemeStore();

  useEffect(() => {
    useMemeStore.persist.onFinishHydration(() => {
      getMemes();
    });
  }, [getMemes]);
  return (
    <main className="flex flex-col justify-between font-itim">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export const ProtectedPage = ProtectedPageComponent;
