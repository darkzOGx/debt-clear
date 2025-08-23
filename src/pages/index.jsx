import Layout from "./Layout.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

import Home from "./Home";
import AnaheimDebtSettlement from "./AnaheimDebtSettlement";
import IrvineDebtSettlement from "./IrvineDebtSettlement";
import SantaAnaDebtSettlement from "./SantaAnaDebtSettlement";
import HuntingtonBeachDebtSettlement from "./HuntingtonBeachDebtSettlement";
import NewportBeachDebtSettlement from "./NewportBeachDebtSettlement";
import LagunaBeachDebtSettlement from "./LagunaBeachDebtSettlement";
import YorbaLindaDebtSettlement from "./YorbaLindaDebtSettlement";
import DanaPointDebtSettlement from "./DanaPointDebtSettlement";
import LagunaNiguelDebtSettlement from "./LagunaNiguelDebtSettlement";
import SealBeachDebtSettlement from "./SealBeachDebtSettlement";
import LagunaWoodsDebtSettlement from "./LagunaWoodsDebtSettlement";
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
import CreditCardDebtReliefOrangeCounty2025 from "./blog/CreditCardDebtReliefOrangeCounty2025";
import MedicalDebtReliefOrangeCounty2025 from "./blog/MedicalDebtReliefOrangeCounty2025";
import OrangeCountyDebtConsolidation2025 from "./blog/OrangeCountyDebtConsolidation2025";
import BusinessDebtReliefOrangeCounty2025 from "./blog/BusinessDebtReliefOrangeCounty2025";
import OrangeCountyDebtLaws2025 from "./blog/OrangeCountyDebtLaws2025";
import OrangeCountyForeclosureAlternatives2025 from "./blog/OrangeCountyForeclosureAlternatives2025";
import OrangeCountySeniorDebtRelief2025 from "./blog/OrangeCountySeniorDebtRelief2025";
import OrangeCountyTaxDebtRelief2025 from "./blog/OrangeCountyTaxDebtRelief2025";
import OrangeCountyStudentLoanForgiveness2025 from "./blog/OrangeCountyStudentLoanForgiveness2025";
import OrangeCountyBankruptcyAlternatives2025 from "./blog/OrangeCountyBankruptcyAlternatives2025";
import DebtSettlementVsTaxReliefOrangeCounty from "./blog/DebtSettlementVsTaxReliefOrangeCounty";
import IrsTaxSettlementStrategiesOrangeCounty from "./blog/IrsTaxSettlementStrategiesOrangeCounty";
import ComprehensiveDebtTaxReliefGuideOrangeCounty from "./blog/ComprehensiveDebtTaxReliefGuideOrangeCounty";
import TestBlogPost from "./blog/TestBlogPost";
import FountainValleyDebtSettlement from "./FountainValleyDebtSettlement";
import GardenGroveDebtSettlement from "./GardenGroveDebtSettlement";
import FullertonDebtSettlement from "./FullertonDebtSettlement";
import OrangeDebtSettlement from "./OrangeDebtSettlement";
import CostaMesaDebtSettlement from "./CostaMesaDebtSettlement";
import MissionViejoDebtSettlement from "./MissionViejoDebtSettlement";
import WestminsterDebtSettlement from "./WestminsterDebtSettlement";
import FAQ from "./FAQ";
import DebtSettlementVsBankruptcy from "./DebtSettlementVsBankruptcy";
import AboutUs from "./AboutUs";
import CaseStudies from "./CaseStudies";
import OrangeCountyHub from "./OrangeCountyHub";
import Resources from "./Resources";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    AnaheimDebtSettlement: AnaheimDebtSettlement,
    IrvineDebtSettlement: IrvineDebtSettlement,
    SantaAnaDebtSettlement: SantaAnaDebtSettlement,
    HuntingtonBeachDebtSettlement: HuntingtonBeachDebtSettlement,
    NewportBeachDebtSettlement: NewportBeachDebtSettlement,
    LagunaBeachDebtSettlement: LagunaBeachDebtSettlement,
    YorbaLindaDebtSettlement: YorbaLindaDebtSettlement,
    DanaPointDebtSettlement: DanaPointDebtSettlement,
    LagunaNiguelDebtSettlement: LagunaNiguelDebtSettlement,
    SealBeachDebtSettlement: SealBeachDebtSettlement,
    LagunaWoodsDebtSettlement: LagunaWoodsDebtSettlement,
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
    CreditCardDebtReliefOrangeCounty2025: CreditCardDebtReliefOrangeCounty2025,
    MedicalDebtReliefOrangeCounty2025: MedicalDebtReliefOrangeCounty2025,
    OrangeCountyDebtConsolidation2025: OrangeCountyDebtConsolidation2025,
    BusinessDebtReliefOrangeCounty2025: BusinessDebtReliefOrangeCounty2025,
    OrangeCountyDebtLaws2025: OrangeCountyDebtLaws2025,
    OrangeCountyForeclosureAlternatives2025: OrangeCountyForeclosureAlternatives2025,
    OrangeCountySeniorDebtRelief2025: OrangeCountySeniorDebtRelief2025,
    OrangeCountyTaxDebtRelief2025: OrangeCountyTaxDebtRelief2025,
    OrangeCountyStudentLoanForgiveness2025: OrangeCountyStudentLoanForgiveness2025,
    OrangeCountyBankruptcyAlternatives2025: OrangeCountyBankruptcyAlternatives2025,
    DebtSettlementVsTaxReliefOrangeCounty: DebtSettlementVsTaxReliefOrangeCounty,
    IrsTaxSettlementStrategiesOrangeCounty: IrsTaxSettlementStrategiesOrangeCounty,
    ComprehensiveDebtTaxReliefGuideOrangeCounty: ComprehensiveDebtTaxReliefGuideOrangeCounty,
    FountainValleyDebtSettlement: FountainValleyDebtSettlement,
    GardenGroveDebtSettlement: GardenGroveDebtSettlement,
    FullertonDebtSettlement: FullertonDebtSettlement,
    OrangeDebtSettlement: OrangeDebtSettlement,
    CostaMesaDebtSettlement: CostaMesaDebtSettlement,
    MissionViejoDebtSettlement: MissionViejoDebtSettlement,
    WestminsterDebtSettlement: WestminsterDebtSettlement,
    FAQ: FAQ,
    DebtSettlementVsBankruptcy: DebtSettlementVsBankruptcy,
    AboutUs: AboutUs,
    CaseStudies: CaseStudies,
    OrangeCountyHub: OrangeCountyHub,
    Resources: Resources,
    
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
            <ScrollToTop />
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/debt-settlement-anaheim" element={<AnaheimDebtSettlement />} />
                <Route path="/debt-settlement-irvine" element={<IrvineDebtSettlement />} />
                <Route path="/debt-settlement-santa-ana" element={<SantaAnaDebtSettlement />} />
                <Route path="/debt-settlement-huntington-beach" element={<HuntingtonBeachDebtSettlement />} />
                <Route path="/debt-settlement-newport-beach" element={<NewportBeachDebtSettlement />} />
                <Route path="/debt-settlement-laguna-beach" element={<LagunaBeachDebtSettlement />} />
                <Route path="/debt-settlement-yorba-linda" element={<YorbaLindaDebtSettlement />} />
                <Route path="/debt-settlement-dana-point" element={<DanaPointDebtSettlement />} />
                <Route path="/debt-settlement-laguna-niguel" element={<LagunaNiguelDebtSettlement />} />
                <Route path="/debt-settlement-seal-beach" element={<SealBeachDebtSettlement />} />
                <Route path="/debt-settlement-laguna-woods" element={<LagunaWoodsDebtSettlement />} />
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
                <Route path="/blog/credit-card-debt-relief-orange-county-2025" element={<CreditCardDebtReliefOrangeCounty2025 />} />
                <Route path="/blog/medical-debt-relief-orange-county-2025" element={<MedicalDebtReliefOrangeCounty2025 />} />
                <Route path="/blog/orange-county-debt-consolidation-2025" element={<OrangeCountyDebtConsolidation2025 />} />
                <Route path="/blog/business-debt-relief-orange-county-2025" element={<BusinessDebtReliefOrangeCounty2025 />} />
                <Route path="/blog/orange-county-debt-laws-2025" element={<OrangeCountyDebtLaws2025 />} />
                <Route path="/blog/orange-county-foreclosure-alternatives-2025" element={<OrangeCountyForeclosureAlternatives2025 />} />
                <Route path="/blog/orange-county-senior-debt-relief-2025" element={<OrangeCountySeniorDebtRelief2025 />} />
                <Route path="/blog/orange-county-tax-debt-relief-2025" element={<OrangeCountyTaxDebtRelief2025 />} />
                <Route path="/blog/orange-county-student-loan-forgiveness-2025" element={<OrangeCountyStudentLoanForgiveness2025 />} />
                <Route path="/blog/orange-county-bankruptcy-alternatives-2025" element={<OrangeCountyBankruptcyAlternatives2025 />} />
                <Route path="/blog/debt-settlement-vs-tax-relief-orange-county" element={<DebtSettlementVsTaxReliefOrangeCounty />} />
                <Route path="/blog/irs-tax-settlement-strategies-orange-county" element={<IrsTaxSettlementStrategiesOrangeCounty />} />
                <Route path="/blog/comprehensive-debt-tax-relief-guide-orange-county" element={<ComprehensiveDebtTaxReliefGuideOrangeCounty />} />
                <Route path="/blog/test" element={<TestBlogPost />} />
                <Route path="/blog/" element={<BlogResources />} />
                <Route path="/blog" element={<BlogResources />} />
                <Route path="/debt-settlement-fountain-valley" element={<FountainValleyDebtSettlement />} />
                <Route path="/debt-settlement-garden-grove" element={<GardenGroveDebtSettlement />} />
                <Route path="/debt-settlement-fullerton" element={<FullertonDebtSettlement />} />
                <Route path="/debt-settlement-orange" element={<OrangeDebtSettlement />} />
                <Route path="/debt-settlement-costa-mesa" element={<CostaMesaDebtSettlement />} />
                <Route path="/debt-settlement-mission-viejo" element={<MissionViejoDebtSettlement />} />
                <Route path="/debt-settlement-westminster" element={<WestminsterDebtSettlement />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/debt-settlement-vs-bankruptcy" element={<DebtSettlementVsBankruptcy />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/orange-county-hub" element={<OrangeCountyHub />} />
                <Route path="/resources" element={<Resources />} />
                
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