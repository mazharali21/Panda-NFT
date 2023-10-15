import { Navbar, Hero, Marketplace, Auction, Featured, Filter, Banner, Footer } from "./Component";
import styles from "./style";


function App() {
  return (
    <div className=" bg-[#02050e] w-full overflow-hidden h-auto  ">

      {/* Navbar */}

      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      {/* Hero Section */}

      <div className={` ${styles.flexStart} overflow-hidden`}>
        <div className={`${styles.boxWidth} `}> 
          <Hero/>
        </div>
      </div>

      {/* Sections */}

      <div className={` ${styles.flexStart} ${styles.paddingX} `}>
        <div className={`${styles.boxWidth} ${styles.paddingY}`}>
          <Marketplace/>
          <Auction/>
          <Featured/>
          <Filter/>
          <Banner/>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App;
