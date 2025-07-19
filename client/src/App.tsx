import { Switch, Route, Router as Wouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Home from "@/pages/home";
import ExperiencePage from "@/pages/experience";
import Projects from "@/pages/projects";
import ProjectPreview from "@/pages/project-preview";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import {useHashLocation} from "wouter/use-hash-location";

function Router() {
  return (
      <Wouter hook={useHashLocation}>
        <Route path="/" component={Home} />
        <Route path="/experience" component={ExperiencePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects/:slug" component={ProjectPreview} />
      </Wouter>
    // <Switch>
    //   <Route path="/" component={Home} />
    //   <Route path="/experience" component={ExperiencePage} />
    //   <Route path="/projects" component={Projects} />
    //   <Route path="/contact" component={Contact} />
    //   <Route path="/projects/:slug" component={ProjectPreview} />
    //   <Route component={NotFound} />
    // </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-ocean-dark text-slate-100">
          <Navigation />
          <Router />
          <Footer />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;