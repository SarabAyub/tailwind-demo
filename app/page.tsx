import LandingPage from "./pages/landing-page/index";
import RootLayout from "./layout";

const Home: React.FC = () => {
  return (  
    <RootLayout>
      <LandingPage />
    </RootLayout>
  )
};

export default Home;
