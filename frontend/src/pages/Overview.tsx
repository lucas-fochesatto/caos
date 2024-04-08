import '../wallet-button.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SDKState } from '@metamask/sdk-react-ui';
import OverviewTable from '../components/OverviewTable';

export default function Home({account} : {account:SDKState}) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(!account.connected) {
            navigate('/login')
        }
    }, [account.connected])
    
    {var revenue = 1000;
     var btms = 50;
     var elevator = 7;
     var sauna = 100;
     var apt = 105
     var status = true;
     var nmt = 120;
    }
    
    return (
        <>
            <div className="p-12 items-left flex justify-left flex-row gap-8">
                <div>
                    
                    <OverviewTable/>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}