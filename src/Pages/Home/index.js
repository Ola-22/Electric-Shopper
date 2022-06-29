import * as S from "./style";
import Header from "../../Components/Header";
import Download from "../../Components/Download";
import Video from "../../Components/Video";
import MostLike from "../../Components/MostLike";
import DownloadFree from "../../Components/DownloadFree";
import AppScreen from "../../Components/appScreen";
import PriceTable from "../../Components/PriceTable";
import Testimonials from "../../Components/Testimonials";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <Download />
      <Video />
      <MostLike />
      <DownloadFree />
      <AppScreen />
      <PriceTable />
      <Testimonials />
      <S.buttonContainer>
        <input type="text" placeholder="E-Mail" />
        <button>Subscribe</button>
      </S.buttonContainer>

      <Footer />
    </S.HomeContainer>
  );
}

export default Home;
