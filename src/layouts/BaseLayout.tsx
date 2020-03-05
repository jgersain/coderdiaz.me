import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import loadable from "@loadable/component";

const Header = loadable(() => import("../partials/Header"));
const Footer = loadable(() => import("../partials/Footer"));

const withBaseLayout = (Page: any, hasHeader: boolean = false) => {
  return class extends React.PureComponent {
    public render() {
      return <>
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
