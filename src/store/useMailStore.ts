import { create } from 'zustand';
import { MOCK_EMAILS } from '../data/mockEmails';
import type { Email } from '../data/mockEmails';

type ViewState = 'inbox' | 'email-detail' | 'calendar' | 'apps';
type TabState = 'Focused' | 'Other';

interface MailStore {
  emails: Email[];
  currentView: ViewState;
  activeTab: TabState;
  selectedEmailId: string | null;
  searchQuery: string;
  isSearchOpen: boolean;
  isComposeOpen: boolean;
  isFilterOpen: boolean;
  
  // Actions
  setCurrentView: (view: ViewState) => void;
  setActiveTab: (tab: TabState) => void;
  selectEmail: (id: string | null) => void;
  markAsRead: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setSearchOpen: (isOpen: boolean) => void;
  setComposeOpen: (isOpen: boolean) => void;
  setFilterOpen: (isOpen: boolean) => void;
  addEmail: (email: Omit<Email, 'id'>) => void;
}

export const useMailStore = create<MailStore>((set) => ({
  emails: MOCK_EMAILS,
  currentView: 'inbox',
  activeTab: 'Focused',
  selectedEmailId: null,
  searchQuery: '',
  isSearchOpen: false,
  isComposeOpen: false,
  isFilterOpen: false,
  
  setCurrentView: (view) => set({ currentView: view }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  selectEmail: (id) => set({ selectedEmailId: id, currentView: id ? 'email-detail' : 'inbox' }),
  markAsRead: (id) => set((state) => ({
    emails: state.emails.map(e => e.id === id ? { ...e, isUnread: false } : e)
  })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSearchOpen: (isOpen) => set({ isSearchOpen: isOpen, searchQuery: isOpen ? '' : '' }),
  setComposeOpen: (isOpen) => set({ isComposeOpen: isOpen }),
  setFilterOpen: (isOpen) => set({ isFilterOpen: isOpen }),
  addEmail: (email) => set((state) => ({
    emails: [{ ...email, id: Date.now().toString() }, ...state.emails]
  })),
}));
