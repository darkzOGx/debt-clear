import Layout from "./Layout.jsx";

import Home from "./Home";
import AnaheimDebtSettlement from "./AnaheimDebtSettlement";
import IrvineDebtSettlement from "./IrvineDebtSettlement";
import SantaAnaDebtSettlement from "./SantaAnaDebtSettlement";
import HuntingtonBeachDebtSettlement from "./HuntingtonBeachDebtSettlement";
import OrangeCountyDebtSettlementLaws from "./blog/OrangeCountyDebtSettlementLaws";
import AiVsTraditionalDebtSettlement from "./blog/AiVsTraditionalDebtSettlement";
import ChooseDebtSettlementCompanyOrangeCounty from "./blog/ChooseDebtSettlementCompanyOrangeCounty";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    AnaheimDebtSettlement: AnaheimDebtSettlement,
    IrvineDebtSettlement: IrvineDebtSettlement,
    SantaAnaDebtSettlement: SantaAnaDebtSettlement,
    HuntingtonBeachDebtSettlement: HuntingtonBeachDebtSettlement,
    OrangeCountyDebtSettlementLaws: OrangeCountyDebtSettlementLaws,
    AiVsTraditionalDebtSettlement: AiVsTraditionalDebtSettlement,
    ChooseDebtSettlementCompanyOrangeCounty: ChooseDebtSettlementCompanyOrangeCounty,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/debt-settlement-anaheim" element={<AnaheimDebtSettlement />} />
                <Route path="/debt-settlement-irvine" element={<IrvineDebtSettlement />} />
                <Route path="/debt-settlement-santa-ana" element={<SantaAnaDebtSettlement />} />
                <Route path="/debt-settlement-huntington-beach" element={<HuntingtonBeachDebtSettlement />} />
                <Route path="/blog/orange-county-debt-settlement-laws" element={<OrangeCountyDebtSettlementLaws />} />
                <Route path="/blog/ai-vs-traditional-debt-settlement" element={<AiVsTraditionalDebtSettlement />} />
                <Route path="/blog/choose-debt-settlement-company-orange-county" element={<ChooseDebtSettlementCompanyOrangeCounty />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}