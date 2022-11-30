import React from "react";
import { Box } from "rebass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, CreatePostCardPage } from "./pages";
import { TopNav } from "./components/top-navigation";
import Profile from "./pages/profile";
import ImageSlider from "./pages/imageSlider";
import { Design } from "./components/design";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/create-post-card" element={<CreatePostCardPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/imageSlider"
            element={<ImageSlider slides={Design} />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
