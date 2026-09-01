import { Header } from './components/Header';
import { InboxTabs } from './components/InboxTabs';
import { EmailList } from './components/EmailList';
import { FloatingComposeButton } from './components/FloatingComposeButton';
import { BottomNavigation } from './components/BottomNavigation';
import { EmailDetail } from './components/EmailDetail';
import { ComposeEmail } from './components/ComposeEmail';
import { SearchView } from './components/SearchView';
import { FilterPanel } from './components/FilterPanel';
import { Calendar } from './components/Calendar';
import { Apps } from './components/Apps';
import { useMailStore } from './store/useMailStore';

function App() {
  const { currentView } = useMailStore();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center w-full">
      {/* Mobile App Container */}
      <div className="w-full sm:max-w-[430px] bg-white h-[100dvh] sm:h-screen sm:shadow-2xl relative flex flex-col overflow-hidden sm:my-0">
        
        {currentView === 'inbox' && (
          <div className="flex-1 flex flex-col h-full relative">
            <Header />
            <InboxTabs />
            <EmailList />
            <FloatingComposeButton />
          </div>
        )}

        {currentView === 'calendar' && <Calendar />}
        
        {currentView === 'apps' && <Apps />}

        {/* Overlays */}
        {currentView === 'email-detail' && <EmailDetail />}
        <SearchView />
        <FilterPanel />
        <ComposeEmail />

        {/* Global Navigation */}
        <BottomNavigation />
        
      </div>
    </div>
  );
}

export default App;
