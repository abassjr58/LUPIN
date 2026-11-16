
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import NowShowing from "./Component/NowShowing";
import ComingSoon from "./Component/Comingsoon";
import Slider from "./Component/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <NowShowing/>
      <ComingSoon/>
      <Footer />

    </div>
  )
}

export default App