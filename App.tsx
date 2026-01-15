import React from 'react';
import { Header } from './components/Header';
import { DashboardFrame } from './components/DashboardFrame';
import { FooterCards } from './components/FooterCards';
import { RoleMatrixSection } from './components/RoleMatrixSection';
import { CoreMetricsSection } from './components/CoreMetricsSection';
import { SystemBoundariesSection } from './components/SystemBoundariesSection';
import { EmergencyResponseSection } from './components/EmergencyResponseSection';
import { InformationArchitectureSection } from './components/InformationArchitectureSection';
import { DesignSystemSection } from './components/DesignSystemSection';
import { SituationalAwarenessSection } from './components/SituationalAwarenessSection';
import { EmergencyCommandCenterSection } from './components/EmergencyCommandCenterSection';
import { StationOperationsSection } from './components/StationOperationsSection';
import { PassengerFlowSection } from './components/PassengerFlowSection';
import { IncidentReplaySection } from './components/IncidentReplaySection';
import { MultiTerminalSection } from './components/MultiTerminalSection';
import { IntegrationCenterSection } from './components/IntegrationCenterSection';
import { ReflectiveSummarySection } from './components/ReflectiveSummarySection';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full font-display text-text-main antialiased selection:bg-primary/30 selection:text-white flex flex-col overflow-x-hidden">

      {/* Background provided by body CSS (var(--glow-ambient)) now.
          We just add a very subtle grain overlay if needed, or leave transparent. */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
         {/* Bottom dot pattern texture */}
         <div className="bottom-dot-pattern"></div>
      </div>

      {/* Scrollable Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto flex flex-col">
        
        {/* Section 1: Main Dashboard (Fixed Height 900px) */}
        <div className="flex flex-col p-4 md:p-6 lg:px-12 lg:py-8 gap-8">
            <Header />
            <div className="w-full h-[900px] flex flex-col">
                <DashboardFrame />
            </div>
        </div>

        {/* Section 2: Role Matrix */}
        <RoleMatrixSection />

        {/* Section 3: Core Metrics & Goals */}
        <CoreMetricsSection />

        {/* Section 4: System Boundaries */}
        <SystemBoundariesSection />

        {/* Section 5: Emergency Response */}
        <EmergencyResponseSection />

        {/* Section 6: Information Architecture */}
        <InformationArchitectureSection />

        {/* Section 7: Design System */}
        <DesignSystemSection />

        {/* Section 8: Situational Awareness */}
        <SituationalAwarenessSection />

        {/* Section 9: Emergency Command Center */}
        <EmergencyCommandCenterSection />

        {/* Section 10: Station Operations */}
        <StationOperationsSection />

        {/* Section 11: Passenger Flow Prediction */}
        <PassengerFlowSection />

        {/* Section 12: Incident Replay */}
        <IncidentReplaySection />

        {/* Section 13: Multi-Terminal Synergy */}
        <MultiTerminalSection />

        {/* Section 14: Integration Center */}
        <IntegrationCenterSection />

        {/* Section 15: Reflective Summary */}
        <ReflectiveSummarySection />

        {/* Global Footer Section */}
        <div className="p-4 md:p-8 lg:px-16 lg:py-10 border-t border-glass-border bg-bg-main/50 backdrop-blur-md">
             <FooterCards />
        </div>

      </div>
    </div>
  );
};

export default App;