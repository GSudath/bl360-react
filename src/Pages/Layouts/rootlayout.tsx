import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Job arouter</h1>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}