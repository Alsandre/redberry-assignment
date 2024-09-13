import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EstateDetailsPage, NewEstatePage, ErrorPage } from "./pages";
import { Layout } from "./components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/estate/:id" element={<EstateDetailsPage />} />
            <Route path="/add-estate" element={<NewEstatePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
