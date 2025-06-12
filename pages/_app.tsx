import type { AppProps } from "next/app";
import { useState, useEffect } from "react"; // Import useState and useEffect
import "../styles/globals.css";
import Layout from "../components/Layout";
import LoadingSpinner from "../components/LoadingSpinner"; // Import LoadingSpinner

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Set loading to false after the component mounts
    // This will hide the spinner after the initial render
    setLoading(false);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <> {/* Use a fragment to wrap conditional rendering */}
      {loading ? (
        <LoadingSpinner /> // Show spinner if loading is true
      ) : (
        <Layout> {/* Show layout and page content if loading is false */}
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}