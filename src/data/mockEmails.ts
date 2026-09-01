export type Email = {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  dateGroup: 'Today' | 'Yesterday' | 'Earlier';
  isUnread: boolean;
  avatarColor: string;
  avatarInitials?: string;
  avatarUrl?: string;
  isFocused: boolean;
};

export const MOCK_EMAILS: Email[] = [
  {
    id: '7',
    senderName: 'Pavan Kumar Sirasani',
    senderEmail: 'pavan.kumar@woxsen.edu.in',
    subject: 'Outing permission',
    preview: 'Respected Sir, I kindly request you to grant me...',
    body: `Harshavardhan Singh Nonwar (B.Tech_2028)
harshavardhansingh.nonwar_2028@woxsen.edu.in
To Pavan Kumar Sirasani pavan.sirasani@woxsen.edu.in
Tuesday, 1 September at 10:50 am

Dear Sir,

I kindly request you to grant me permission to go out of the campus for a short while due to a personal requirement. I will return to the campus on time and follow all the necessary rules.

Thank you for your consideration.

Regards,
Harshavardhan Singh

Get Outlook for Android

--------------------------------------------------

Pavan Kumar Sirasani
To You
Tuesday, 1 September at 11:14 am

With reference to your outing request, we have confirmed your requirement with your mother over a phone call. Based on her acceptance and confirmation, your outing request is approved.

You are requested to return to the campus within the permitted time and follow the campus guidelines.`,
    time: '11:14 AM',
    dateGroup: 'Today',
    isUnread: false,
    avatarColor: 'bg-gray-700',
    avatarInitials: 'PS',
    avatarUrl: '/pavan.png',
    isFocused: true,
  },
  {
    id: '1',
    senderName: 'Woxsen Japan Centre',
    senderEmail: 'japan.centre@university.edu',
    subject: 'Registrations for Japanese Language Course',
    preview: 'Dear Students, We are pleased to inform you that registrations are now open...',
    body: 'Dear Students,\n\nWe are pleased to inform you that registrations are now open for the upcoming Japanese Language Course. This course is designed to introduce you to the fundamentals of Japanese language and culture.\n\nRegistration details and important dates are provided below.\n\nRegards,\nUniversity Communications',
    time: '9:07 AM',
    dateGroup: 'Today',
    isUnread: true,
    avatarColor: 'bg-black',
    avatarInitials: 'WJ',
    isFocused: true,
  },
  {
    id: '2',
    senderName: 'Finance Club',
    senderEmail: 'finance@university.edu',
    subject: 'Reminder: Zerodha Varsity Quiz – Registration',
    preview: 'Dear Participants, The wait is almost over! This is a quick reminder...',
    body: 'Dear Participants,\n\nThe wait is almost over! This is a quick reminder for the Zerodha Varsity Quiz.\n\nMake sure to complete your registration by the end of the day.\n\nBest,\nFinance Club',
    time: 'Monday',
    dateGroup: 'Yesterday',
    isUnread: true,
    avatarColor: 'bg-indigo-900',
    avatarInitials: 'FC',
    isFocused: true,
  },
  {
    id: '3',
    senderName: 'Music Club',
    senderEmail: 'music@university.edu',
    subject: 'THE STAGE IS LIVE — Come Experience...',
    preview: 'Dear Students, Greetings from Distortion! The stage is set. The lights...',
    body: 'Dear Students,\n\nGreetings from Distortion! The stage is set. The lights are ready.\n\nJoin us this Friday evening for an unforgettable musical experience featuring our top bands.\n\nCheers,\nMusic Club',
    time: 'Monday',
    dateGroup: 'Yesterday',
    isUnread: true,
    avatarColor: 'bg-orange-500',
    avatarInitials: 'MC',
    isFocused: true,
  },
  {
    id: '4',
    senderName: 'Music Club',
    senderEmail: 'music@university.edu',
    subject: 'The Wait Is Almost Over !!! | Unplugged...',
    preview: 'Dear Students, Greetings from Distortion! The debate is over. The opi...',
    body: 'Dear Students,\n\nGreetings from Distortion! The debate is over.\n\nGet ready for our unplugged acoustic sessions next week.\n\nBest,\nMusic Club',
    time: 'Monday',
    dateGroup: 'Yesterday',
    isUnread: true,
    avatarColor: 'bg-orange-500',
    avatarInitials: 'MC',
    isFocused: false,
  },
  {
    id: '5',
    senderName: 'Coursera',
    senderEmail: 'no-reply@coursera.org',
    subject: 'Ready: Foundations of Data Structures',
    preview: 'Limited time offer: Coursera Plus now ₹7,499/year',
    body: 'Limited time offer: Coursera Plus now ₹7,499/year.\n\nEnroll today and advance your career with unlimited access to top courses, certificates, and more.',
    time: 'Monday',
    dateGroup: 'Yesterday',
    isUnread: true,
    avatarColor: 'bg-orange-600',
    avatarInitials: 'C',
    isFocused: false,
  },
  {
    id: '6',
    senderName: 'E-Cell Communications',
    senderEmail: 'ecell@university.edu',
    subject: 'Entrepreneurship & Innovation Updates',
    preview: 'Important updates and upcoming events for students...',
    body: 'Hello Innovators,\n\nHere are the important updates and upcoming events from E-Cell this month.\n\nKeep building,\nE-Cell Team',
    time: 'Monday',
    dateGroup: 'Earlier',
    isUnread: false,
    avatarColor: 'bg-slate-600',
    avatarInitials: 'EC',
    isFocused: true,
  }
];
