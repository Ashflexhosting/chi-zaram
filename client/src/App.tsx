/**
 * Chi-Zaram Harvest Editorial shell: the single-page public brand experience uses a
 * light, warm theme and keeps navigation anchored to the editorial sections.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Catalogue from "./pages/Catalogue";
import PacksPricing from "./pages/PacksPricing";
import BulkSupply from "./pages/BulkSupply";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/story"} component={Story} />
      <Route path={"/catalogue"} component={Catalogue} />
      <Route path={"/packs-pricing"} component={PacksPricing} />
      <Route path={"/bulk-supply"} component={BulkSupply} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
