import "./App.css";
import { create } from "zustand";
import Navbar from "./components/Navbar";

const useStore = create((set) => ({
  bannerType: "success",
  setBannerType: (type) => set({ bannerType: type }),
}));

function App() {
  const type = useStore((state) => state.bannerType);

  return (
    <>
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <Navbar />
      </div>
      <section
        style={{
          marginTop: "64px",
          padding: "2rem",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <button onClick={() => useStore.getState().setBannerType("success")}>
          Show Success Banner
        </button>
        <button onClick={() => useStore.getState().setBannerType("error")}>
          Show Error Banner
        </button>

        <div style={{ marginTop: "2rem" }}>
          {type === "success" && (
            <banner-component
              type={type}
              header="Success Header"
              content="Success Content"
            />
          )}
          {type === "error" && (
            <banner-component
              type={type}
              header="Error Header"
              content="Error Content"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
