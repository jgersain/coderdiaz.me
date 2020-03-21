import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import loadable from "@loadable/component";
import Header from "../partials/Header";
import Banner from "../partials/Banner";

// Laoding component with Lazy-Load @loadable/component
const Footer = loadable(() => import("../partials/Footer"));

const withBaseLayout = (Page: any, hasHeader: boolean = false) => {
  return class extends React.PureComponent {
    public render() {
      return <>
        <Banner className="hidden" />
        <HelmetProvider>
          { hasHeader ? <Header /> : null }
          <main className="main">
            <Page {...this.props} />
          </main>
          <Footer />
        </HelmetProvider>
      </>;
    }
  }
};

export default withBaseLayout;
