import React, { Suspense, lazy } from 'react';
import Layout from "./Layout.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

// Keep Home page for immediate loading
import Home from "./Home";

// Lazy load all other pages
const AnaheimDebtSettlement = lazy(() => import("./AnaheimDebtSettlement"));
const IrvineDebtSettlement = lazy(() => import("./IrvineDebtSettlement"));
const SantaAnaDebtSettlement = lazy(() => import("./SantaAnaDebtSettlement"));
const HuntingtonBeachDebtSettlement = lazy(() => import("./HuntingtonBeachDebtSettlement"));
const NewportBeachDebtSettlement = lazy(() => import("./NewportBeachDebtSettlement"));
const LagunaBeachDebtSettlement = lazy(() => import("./LagunaBeachDebtSettlement"));
const YorbaLindaDebtSettlement = lazy(() => import("./YorbaLindaDebtSettlement"));
const DanaPointDebtSettlement = lazy(() => import("./DanaPointDebtSettlement"));
const LagunaNiguelDebtSettlement = lazy(() => import("./LagunaNiguelDebtSettlement"));
const SealBeachDebtSettlement = lazy(() => import("./SealBeachDebtSettlement"));
const LagunaWoodsDebtSettlement = lazy(() => import("./LagunaWoodsDebtSettlement"));
const BlogResources = lazy(() => import("./BlogResources"));
const OrangeCountyDebtStatistics = lazy(() => import("./OrangeCountyDebtStatistics"));
// Lazy load all blog pages
const OrangeCountyDebtSettlementLaws = lazy(() => import("./blog/OrangeCountyDebtSettlementLaws"));
const AiVsTraditionalDebtSettlement = lazy(() => import("./blog/AiVsTraditionalDebtSettlement"));
const ChooseDebtSettlementCompanyOrangeCounty = lazy(() => import("./blog/ChooseDebtSettlementCompanyOrangeCounty"));
const BankruptcyVsDebtSettlementOrangeCounty = lazy(() => import("./blog/BankruptcyVsDebtSettlementOrangeCounty"));
const MedicalDebtSettlementOrangeCounty = lazy(() => import("./blog/MedicalDebtSettlementOrangeCounty"));
const CreditCardDebtSettlementOrangeCounty = lazy(() => import("./blog/CreditCardDebtSettlementOrangeCounty"));
const SmallBusinessDebtReliefOrangeCounty = lazy(() => import("./blog/SmallBusinessDebtReliefOrangeCounty"));
const TaxImplicationsDebtSettlementCalifornia = lazy(() => import("./blog/TaxImplicationsDebtSettlementCalifornia"));
const DebtSettlementSeniorsOrangeCounty = lazy(() => import("./blog/DebtSettlementSeniorsOrangeCounty"));
const StudentLoanDebtReliefOrangeCounty = lazy(() => import("./blog/StudentLoanDebtReliefOrangeCounty"));
const PropertyProtectionDebtSettlementOrangeCounty = lazy(() => import("./blog/PropertyProtectionDebtSettlementOrangeCounty"));
const DebtSettlementTimelineOrangeCounty = lazy(() => import("./blog/DebtSettlementTimelineOrangeCounty"));
const DebtSettlementFeesOrangeCounty = lazy(() => import("./blog/DebtSettlementFeesOrangeCounty"));
const CreditScoreRecoveryDebtSettlementOrangeCounty = lazy(() => import("./blog/CreditScoreRecoveryDebtSettlementOrangeCounty"));
const DebtCollectionLawsOrangeCounty = lazy(() => import("./blog/DebtCollectionLawsOrangeCounty"));
const CreditCardDebtReliefOrangeCounty2025 = lazy(() => import("./blog/CreditCardDebtReliefOrangeCounty2025"));
const MedicalDebtReliefOrangeCounty2025 = lazy(() => import("./blog/MedicalDebtReliefOrangeCounty2025"));
const OrangeCountyDebtConsolidation2025 = lazy(() => import("./blog/OrangeCountyDebtConsolidation2025"));
const BusinessDebtReliefOrangeCounty2025 = lazy(() => import("./blog/BusinessDebtReliefOrangeCounty2025"));
const OrangeCountyDebtLaws2025 = lazy(() => import("./blog/OrangeCountyDebtLaws2025"));
const OrangeCountyForeclosureAlternatives2025 = lazy(() => import("./blog/OrangeCountyForeclosureAlternatives2025"));
const OrangeCountySeniorDebtRelief2025 = lazy(() => import("./blog/OrangeCountySeniorDebtRelief2025"));
const OrangeCountyTaxDebtRelief2025 = lazy(() => import("./blog/OrangeCountyTaxDebtRelief2025"));
const OrangeCountyStudentLoanForgiveness2025 = lazy(() => import("./blog/OrangeCountyStudentLoanForgiveness2025"));
const OrangeCountyBankruptcyAlternatives2025 = lazy(() => import("./blog/OrangeCountyBankruptcyAlternatives2025"));
const HomesteadExemptionDebtSettlementOrangeCounty = lazy(() => import("./blog/HomesteadExemptionDebtSettlementOrangeCounty"));
const TaxFormsDebtSettlementOrangeCounty = lazy(() => import("./blog/1099cTaxFormsDebtSettlementOrangeCounty"));
const AiDebtSettlementTechnologyOrangeCounty = lazy(() => import("./blog/AiDebtSettlementTechnologyOrangeCounty"));
const AssetProtectionTrustsDebtSettlementOrangeCounty = lazy(() => import("./blog/AssetProtectionTrustsDebtSettlementOrangeCounty"));
const BalanceTransferVsDebtSettlementOrangeCounty = lazy(() => import("./blog/BalanceTransferVsDebtSettlementOrangeCounty"));
const BuildingCreditDuringDebtSettlementOrangeCounty = lazy(() => import("./blog/BuildingCreditDuringDebtSettlementOrangeCounty"));
const CaliforniaTaxImplicationsDebtReliefOrangeCounty = lazy(() => import("./blog/CaliforniaTaxImplicationsDebtReliefOrangeCounty"));
const CommercialDebtSettlementOrangeCounty = lazy(() => import("./blog/CommercialDebtSettlementOrangeCounty"));
const CreditCardDebtSettlementMajorBanksOrangeCounty = lazy(() => import("./blog/CreditCardDebtSettlementMajorBanksOrangeCounty"));
const CreditRepairAfterDebtSettlementOrangeCounty = lazy(() => import("./blog/CreditRepairAfterDebtSettlementOrangeCounty"));
const DebtCollectorHarassmentRightsOrangeCounty = lazy(() => import("./blog/DebtCollectorHarassmentRightsOrangeCounty"));
const DebtConsolidationLoansComparisonOrangeCounty = lazy(() => import("./blog/DebtConsolidationLoansComparisonOrangeCounty"));
const DebtConsolidationVsDebtSettlementOrangeCounty = lazy(() => import("./blog/DebtConsolidationVsDebtSettlementOrangeCounty"));
const DebtSettlementAttorneyOrangeCounty = lazy(() => import("./blog/DebtSettlementAttorneyOrangeCounty"));
const DebtSettlementChecklistOrangeCounty = lazy(() => import("./blog/DebtSettlementChecklistOrangeCounty"));
const DebtSettlementNegotiationsOrangeCounty = lazy(() => import("./blog/DebtSettlementNegotiationsOrangeCounty"));
const DebtSettlementProcessGuideOrangeCounty2025 = lazy(() => import("./blog/DebtSettlementProcessGuideOrangeCounty2025"));
const DebtSettlementScamsOrangeCounty = lazy(() => import("./blog/DebtSettlementScamsOrangeCounty"));
const DebtSettlementSuccessStoriesOrangeCounty2025 = lazy(() => import("./blog/DebtSettlementSuccessStoriesOrangeCounty2025"));
const DebtSettlementVsBankruptcyCostComparisonOrangeCounty = lazy(() => import("./blog/DebtSettlementVsBankruptcyCostComparisonOrangeCounty"));
const EmergencyFundBuildingDebtReliefOrangeCounty = lazy(() => import("./blog/EmergencyFundBuildingDebtReliefOrangeCounty"));
const FdcpaConsumerProtectionOrangeCounty = lazy(() => import("./blog/FdcpaConsumerProtectionOrangeCounty"));
const FinancialPlanningAfterDebtSettlementOrangeCounty = lazy(() => import("./blog/FinancialPlanningAfterDebtSettlementOrangeCounty"));
const HiddenCostsDebtSettlementOrangeCounty = lazy(() => import("./blog/HiddenCostsDebtSettlementOrangeCounty"));
const HighInterestCreditCardDebtReliefOrangeCounty = lazy(() => import("./blog/HighInterestCreditCardDebtReliefOrangeCounty"));
const HospitalDebtSettlementOrangeCounty = lazy(() => import("./blog/HospitalDebtSettlementOrangeCounty"));
const InvestmentStrategiesDebtSettlementOrangeCounty = lazy(() => import("./blog/InvestmentStrategiesDebtSettlementOrangeCounty"));
const LegalRightsDebtSettlementOrangeCounty = lazy(() => import("./blog/LegalRightsDebtSettlementOrangeCounty"));
const MachineLearningDebtReliefOrangeCounty = lazy(() => import("./blog/MachineLearningDebtReliefOrangeCounty"));
const MortgageModificationVsDebtSettlementOrangeCounty = lazy(() => import("./blog/MortgageModificationVsDebtSettlementOrangeCounty"));
const PrivateStudentLoanSettlementOrangeCounty = lazy(() => import("./blog/PrivateStudentLoanSettlementOrangeCounty"));
const RetirementPlanningAfterDebtReliefOrangeCounty = lazy(() => import("./blog/RetirementPlanningAfterDebtReliefOrangeCounty"));
const SmallBusinessDebtSettlementCaseStudiesOrangeCounty = lazy(() => import("./blog/SmallBusinessDebtSettlementCaseStudiesOrangeCounty"));
const SocialSecurityDebtSettlementOrangeCountySeniors = lazy(() => import("./blog/SocialSecurityDebtSettlementOrangeCountySeniors"));
const TaxImplicationsDebtSettlementOrangeCounty = lazy(() => import("./blog/TaxImplicationsDebtSettlementOrangeCounty"));
const FountainValleyDebtSettlement = lazy(() => import("./FountainValleyDebtSettlement"));
const GardenGroveDebtSettlement = lazy(() => import("./GardenGroveDebtSettlement"));
const FullertonDebtSettlement = lazy(() => import("./FullertonDebtSettlement"));
const OrangeDebtSettlement = lazy(() => import("./OrangeDebtSettlement"));
const CostaMesaDebtSettlement = lazy(() => import("./CostaMesaDebtSettlement"));
const MissionViejoDebtSettlement = lazy(() => import("./MissionViejoDebtSettlement"));
const WestminsterDebtSettlement = lazy(() => import("./WestminsterDebtSettlement"));
const FAQ = lazy(() => import("./FAQ"));
const DebtSettlementVsBankruptcy = lazy(() => import("./DebtSettlementVsBankruptcy"));
const AboutUs = lazy(() => import("./AboutUs"));
const CaseStudies = lazy(() => import("./CaseStudies"));
const OrangeCountyHub = lazy(() => import("./OrangeCountyHub"));
const Resources = lazy(() => import("./Resources"));

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

// Loading component for lazy routes
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-sm font-mono text-neutral-600 uppercase tracking-wide">Loading...</div>
    </div>
  </div>
);

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
    HomesteadExemptionDebtSettlementOrangeCounty: HomesteadExemptionDebtSettlementOrangeCounty,
    TaxFormsDebtSettlementOrangeCounty: TaxFormsDebtSettlementOrangeCounty,
    AiDebtSettlementTechnologyOrangeCounty: AiDebtSettlementTechnologyOrangeCounty,
    AssetProtectionTrustsDebtSettlementOrangeCounty: AssetProtectionTrustsDebtSettlementOrangeCounty,
    BalanceTransferVsDebtSettlementOrangeCounty: BalanceTransferVsDebtSettlementOrangeCounty,
    BuildingCreditDuringDebtSettlementOrangeCounty: BuildingCreditDuringDebtSettlementOrangeCounty,
    CaliforniaTaxImplicationsDebtReliefOrangeCounty: CaliforniaTaxImplicationsDebtReliefOrangeCounty,
    CommercialDebtSettlementOrangeCounty: CommercialDebtSettlementOrangeCounty,
    CreditCardDebtSettlementMajorBanksOrangeCounty: CreditCardDebtSettlementMajorBanksOrangeCounty,
    CreditRepairAfterDebtSettlementOrangeCounty: CreditRepairAfterDebtSettlementOrangeCounty,
    DebtCollectorHarassmentRightsOrangeCounty: DebtCollectorHarassmentRightsOrangeCounty,
    DebtConsolidationLoansComparisonOrangeCounty: DebtConsolidationLoansComparisonOrangeCounty,
    DebtConsolidationVsDebtSettlementOrangeCounty: DebtConsolidationVsDebtSettlementOrangeCounty,
    DebtSettlementAttorneyOrangeCounty: DebtSettlementAttorneyOrangeCounty,
    DebtSettlementChecklistOrangeCounty: DebtSettlementChecklistOrangeCounty,
    DebtSettlementNegotiationsOrangeCounty: DebtSettlementNegotiationsOrangeCounty,
    DebtSettlementProcessGuideOrangeCounty2025: DebtSettlementProcessGuideOrangeCounty2025,
    DebtSettlementScamsOrangeCounty: DebtSettlementScamsOrangeCounty,
    DebtSettlementSuccessStoriesOrangeCounty2025: DebtSettlementSuccessStoriesOrangeCounty2025,
    DebtSettlementVsBankruptcyCostComparisonOrangeCounty: DebtSettlementVsBankruptcyCostComparisonOrangeCounty,
    EmergencyFundBuildingDebtReliefOrangeCounty: EmergencyFundBuildingDebtReliefOrangeCounty,
    FdcpaConsumerProtectionOrangeCounty: FdcpaConsumerProtectionOrangeCounty,
    FinancialPlanningAfterDebtSettlementOrangeCounty: FinancialPlanningAfterDebtSettlementOrangeCounty,
    HiddenCostsDebtSettlementOrangeCounty: HiddenCostsDebtSettlementOrangeCounty,
    HighInterestCreditCardDebtReliefOrangeCounty: HighInterestCreditCardDebtReliefOrangeCounty,
    HospitalDebtSettlementOrangeCounty: HospitalDebtSettlementOrangeCounty,
    InvestmentStrategiesDebtSettlementOrangeCounty: InvestmentStrategiesDebtSettlementOrangeCounty,
    LegalRightsDebtSettlementOrangeCounty: LegalRightsDebtSettlementOrangeCounty,
    MachineLearningDebtReliefOrangeCounty: MachineLearningDebtReliefOrangeCounty,
    MortgageModificationVsDebtSettlementOrangeCounty: MortgageModificationVsDebtSettlementOrangeCounty,
    PrivateStudentLoanSettlementOrangeCounty: PrivateStudentLoanSettlementOrangeCounty,
    RetirementPlanningAfterDebtReliefOrangeCounty: RetirementPlanningAfterDebtReliefOrangeCounty,
    SmallBusinessDebtSettlementCaseStudiesOrangeCounty: SmallBusinessDebtSettlementCaseStudiesOrangeCounty,
    SocialSecurityDebtSettlementOrangeCountySeniors: SocialSecurityDebtSettlementOrangeCountySeniors,
    TaxImplicationsDebtSettlementOrangeCounty: TaxImplicationsDebtSettlementOrangeCounty,
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
            <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/blog" element={<BlogResources />} />
                <Route path="/orange-county-debt-statistics" element={<OrangeCountyDebtStatistics />} />
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
                <Route path="/blog/homestead-exemption-debt-settlement-orange-county" element={<HomesteadExemptionDebtSettlementOrangeCounty />} />
                <Route path="/blog/1099c-tax-forms-debt-settlement-orange-county" element={<TaxFormsDebtSettlementOrangeCounty />} />
                <Route path="/blog/ai-debt-settlement-technology-orange-county" element={<AiDebtSettlementTechnologyOrangeCounty />} />
                <Route path="/blog/asset-protection-trusts-debt-settlement-orange-county" element={<AssetProtectionTrustsDebtSettlementOrangeCounty />} />
                <Route path="/blog/balance-transfer-vs-debt-settlement-orange-county" element={<BalanceTransferVsDebtSettlementOrangeCounty />} />
                <Route path="/blog/building-credit-during-debt-settlement-orange-county" element={<BuildingCreditDuringDebtSettlementOrangeCounty />} />
                <Route path="/blog/california-tax-implications-debt-relief-orange-county" element={<CaliforniaTaxImplicationsDebtReliefOrangeCounty />} />
                <Route path="/blog/commercial-debt-settlement-orange-county" element={<CommercialDebtSettlementOrangeCounty />} />
                <Route path="/blog/credit-card-debt-settlement-major-banks-orange-county" element={<CreditCardDebtSettlementMajorBanksOrangeCounty />} />
                <Route path="/blog/credit-repair-after-debt-settlement-orange-county" element={<CreditRepairAfterDebtSettlementOrangeCounty />} />
                <Route path="/blog/debt-collector-harassment-rights-orange-county" element={<DebtCollectorHarassmentRightsOrangeCounty />} />
                <Route path="/blog/debt-consolidation-loans-comparison-orange-county" element={<DebtConsolidationLoansComparisonOrangeCounty />} />
                <Route path="/blog/debt-consolidation-vs-debt-settlement-orange-county" element={<DebtConsolidationVsDebtSettlementOrangeCounty />} />
                <Route path="/blog/debt-settlement-attorney-orange-county" element={<DebtSettlementAttorneyOrangeCounty />} />
                <Route path="/blog/debt-settlement-checklist-orange-county" element={<DebtSettlementChecklistOrangeCounty />} />
                <Route path="/blog/debt-settlement-negotiations-orange-county" element={<DebtSettlementNegotiationsOrangeCounty />} />
                <Route path="/blog/debt-settlement-process-guide-orange-county-2025" element={<DebtSettlementProcessGuideOrangeCounty2025 />} />
                <Route path="/blog/debt-settlement-scams-orange-county" element={<DebtSettlementScamsOrangeCounty />} />
                <Route path="/blog/debt-settlement-success-stories-orange-county-2025" element={<DebtSettlementSuccessStoriesOrangeCounty2025 />} />
                <Route path="/blog/debt-settlement-vs-bankruptcy-cost-comparison-orange-county" element={<DebtSettlementVsBankruptcyCostComparisonOrangeCounty />} />
                <Route path="/blog/emergency-fund-building-debt-relief-orange-county" element={<EmergencyFundBuildingDebtReliefOrangeCounty />} />
                <Route path="/blog/fdcpa-consumer-protection-orange-county" element={<FdcpaConsumerProtectionOrangeCounty />} />
                <Route path="/blog/financial-planning-after-debt-settlement-orange-county" element={<FinancialPlanningAfterDebtSettlementOrangeCounty />} />
                <Route path="/blog/hidden-costs-debt-settlement-orange-county" element={<HiddenCostsDebtSettlementOrangeCounty />} />
                <Route path="/blog/high-interest-credit-card-debt-relief-orange-county" element={<HighInterestCreditCardDebtReliefOrangeCounty />} />
                <Route path="/blog/hospital-debt-settlement-orange-county" element={<HospitalDebtSettlementOrangeCounty />} />
                <Route path="/blog/investment-strategies-debt-settlement-orange-county" element={<InvestmentStrategiesDebtSettlementOrangeCounty />} />
                <Route path="/blog/legal-rights-debt-settlement-orange-county" element={<LegalRightsDebtSettlementOrangeCounty />} />
                <Route path="/blog/machine-learning-debt-relief-orange-county" element={<MachineLearningDebtReliefOrangeCounty />} />
                <Route path="/blog/mortgage-modification-vs-debt-settlement-orange-county" element={<MortgageModificationVsDebtSettlementOrangeCounty />} />
                <Route path="/blog/private-student-loan-settlement-orange-county" element={<PrivateStudentLoanSettlementOrangeCounty />} />
                <Route path="/blog/retirement-planning-after-debt-relief-orange-county" element={<RetirementPlanningAfterDebtReliefOrangeCounty />} />
                <Route path="/blog/small-business-debt-settlement-case-studies-orange-county" element={<SmallBusinessDebtSettlementCaseStudiesOrangeCounty />} />
                <Route path="/blog/social-security-debt-settlement-orange-county-seniors" element={<SocialSecurityDebtSettlementOrangeCountySeniors />} />
                <Route path="/blog/tax-implications-debt-settlement-orange-county" element={<TaxImplicationsDebtSettlementOrangeCounty />} />
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
            </Suspense>
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