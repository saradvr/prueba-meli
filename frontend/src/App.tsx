import React from "react";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { LayoutResults } from "./pages/layouts/LayoutResults";
import { LayoutSearch } from "./pages/layouts/LayoutSearch";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ProductDetail } from "./pages/ProductDetail";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutSearch />}>
          <Route index element={<Home />} />
          <Route path="items" element={<LayoutResults />}>
            <Route index element={<Results />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
