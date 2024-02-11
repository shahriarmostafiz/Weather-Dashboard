import { useContext, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Board from './components/Header/WeatherBoard/Board';
import { WeatherContext } from './context';

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
    const { loading, weatherData } = useContext(WeatherContext)
    const [climateImage, setClimateImage] = useState("")
    function getBackGroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Thunder":
                return ThunderStormImage;
            case "Haze":
                return FewCloudsImage;
            case "Fog":
                return WinterImage;
            case "Snow":
                return SnowImage
            case "Mist":
                return MistImage

            default:
                return ClearSkyImage

        }
    }
    useEffect(() => {
        const bgImage = getBackGroundImage(weatherData.climate)
        setClimateImage(bgImage)

    }, [weatherData.climate])

    return (
        <>
            {
                loading.state ? (<p>{loading.message}</p>) : (
                    <>
                        <div className='grid place-items-center h-screen bg-no-repeat bg-cover' style={{ backgroundImage: `url('${climateImage}')` }}>
                            <Header />
                            <main>
                                <section>
                                    <Board />
                                </section>
                            </main>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Page;

