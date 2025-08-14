import Layout from "./Layout.jsx";

import Home from "./Home";
import AnaheimDebtSettlement from "./AnaheimDebtSettlement";
import IrvineDebtSettlement from "./IrvineDebtSettlement";
import SantaAnaDebtSettlement from "./SantaAnaDebtSettlement";
import HuntingtonBeachDebtSettlement from "./HuntingtonBeachDebtSettlement";
import BlogResources from "./BlogResources";
import OrangeCountyDebtSettlementLaws from "./blog/OrangeCountyDebtSettlementLaws";
import AiVsTraditionalDebtSettlement from "./blog/AiVsTraditionalDebtSettlement";
import ChooseDebtSettlementCompanyOrangeCounty from "./blog/ChooseDebtSettlementCompanyOrangeCounty";
import BankruptcyVsDebtSettlementOrangeCounty from "./blog/BankruptcyVsDebtSettlementOrangeCounty";
import MedicalDebtSettlementOrangeCounty from "./blog/MedicalDebtSettlementOrangeCounty";
import CreditCardDebtSettlementOrangeCounty from "./blog/CreditCardDebtSettlementOrangeCounty";
import SmallBusinessDebtReliefOrangeCounty from "./blog/SmallBusinessDebtReliefOrangeCounty";
import TaxImplicationsDebtSettlementCalifornia from "./blog/TaxImplicationsDebtSettlementCalifornia";
import DebtSettlementSeniorsOrangeCounty from "./blog/DebtSettlementSeniorsOrangeCounty";
import StudentLoanDebtReliefOrangeCounty from "./blog/StudentLoanDebtReliefOrangeCounty";
import PropertyProtectionDebtSettlementOrangeCounty from "./blog/PropertyProtectionDebtSettlementOrangeCounty";
import DebtSettlementTimelineOrangeCounty from "./blog/DebtSettlementTimelineOrangeCounty";
import DebtSettlementFeesOrangeCounty from "./blog/DebtSettlementFeesOrangeCounty";
import CreditScoreRecoveryDebtSettlementOrangeCounty from "./blog/CreditScoreRecoveryDebtSettlementOrangeCounty";
import DebtCollectionLawsOrangeCounty from "./blog/DebtCollectionLawsOrangeCounty";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    AnaheimDebtSettlement: AnaheimDebtSettlement,
    IrvineDebtSettlement: IrvineDebtSettlement,
    SantaAnaDebtSettlement: SantaAnaDebtSettlement,
    HuntingtonBeachDebtSettlement: HuntingtonBeachDebtSettlement,
    BlogResources: BlogResources,
    OrangeCountyDebtSettlementLaws: OrangeCountyDebtSettlementLaws,
    AiVsTraditionalDebtSettlement: AiVsTraditionalDebtSettlement,
    ChooseDebtSettlementCompanyOrangeCounty: ChooseDebtSettlementCompanyOrangeCounty,
    BankruptcyVsDebtSettlementOrangeCounty: BankruptcyVsDebtSettlementOrangeCounty,
    MedicalDebtSettlementOrangeCounty: MedicalDebtSettlementOrangeCounty,
    CreditCardDebtSettlementOrangeCounty: CreditCardDebtSettlementOrangeCounty,
    SmallBusinessDebtReliefOrangeCounty: SmallBusinessDebtReliefOrangeCounty,
    TaxImplicationsDebtSettlementCalifornia: TaxImplicationsDebtSettlementCalifornia,
    DebtSettlementSeniorsOrangeCounty: DebtSettlementSeniorsOrangeCounty,
    StudentLoanDebtReliefOrangeCounty: StudentLoanDebtReliefOrangeCounty,
    PropertyProtectionDebtSettlementOrangeCounty: PropertyProtectionDebtSettlementOrangeCounty,
    DebtSettlementTimelineOrangeCounty: DebtSettlementTimelineOrangeCounty,
    DebtSettlementFeesOrangeCounty: DebtSettlementFeesOrangeCounty,
    CreditScoreRecoveryDebtSettlementOrangeCounty: CreditScoreRecoveryDebtSettlementOrangeCounty,
    DebtCollectionLawsOrangeCounty: DebtCollectionLawsOrangeCounty,
    
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
                <Route path="/blog" element={<BlogResources />} />
                <Route path="/blog/orange-county-debt-settlement-laws" element={<OrangeCountyDebtSettlementLaws />} />
                <Route path="/blog/ai-vs-traditional-debt-settlement" element={<AiVsTraditionalDebtSettlement />} />
                <Route path="/blog/choose-debt-settlement-company-orange-county" element={<ChooseDebtSettlementCompanyOrangeCounty />} />
                <Route path="/blog/bankruptcy-vs-debt-settlement-orange-county" element={<BankruptcyVsDebtSettlementOrangeCounty />} />
                <Route path="/blog/medical-debt-settlement-orange-county" element={<MedicalDebtSettlementOrangeCounty />} />
                <Route path="/blog/credit-card-debt-settlement-orange-county" element={<CreditCardDebtSettlementOrangeCounty />} />
                <Route path="/blog/small-business-debt-relief-orange-county" element={<SmallBusinessDebtReliefOrangeCounty />} />
                <Route path="/blog/tax-implications-debt-settlement-california" element={<TaxImplicationsDebtSettlementCalifornia />} />
                <Route path="/blog/debt-settlement-seniors-orange-county" element={<DebtSettlementSeniorsOrangeCounty />} />
                <Route path="/blog/student-loan-debt-relief-orange-county" element={<StudentLoanDebtReliefOrangeCounty />} />
                <Route path="/blog/property-protection-debt-settlement-orange-county" element={<PropertyProtectionDebtSettlementOrangeCounty />} />
                <Route path="/blog/debt-settlement-timeline-orange-county" element={<DebtSettlementTimelineOrangeCounty />} />
                <Route path="/blog/debt-settlement-fees-orange-county" element={<DebtSettlementFeesOrangeCounty />} />
                <Route path="/blog/credit-score-recovery-debt-settlement-orange-county" element={<CreditScoreRecoveryDebtSettlementOrangeCounty />} />
                <Route path="/blog/debt-collection-laws-orange-county" element={<DebtCollectionLawsOrangeCounty />} />
                
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