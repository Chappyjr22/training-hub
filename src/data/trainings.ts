export interface Slide {
  id: string;
  type: 'title' | 'content' | 'summary';
  title?: string;
  subtitle?: string;
  description?: string;
  content?: string;
  leftContent?: string;
  rightContent?: string;
  image?: string;
  layout?: 'standard' | 'two-col' | 'two-col-wide-left' | 'two-col-wide-right';
  buttons?: Array<{
    text: string;
    action?: string;
  }>;
}

export interface Training {
  id: string;
  title: string;
  description: string;
  courseTitle: string;
  icon?: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  modulesCount: number;
  modules: Module[];
  thumbnail?: string;
  color?: string;
}

export interface Module {
  id: string;
  title: string;
  slides: Slide[];
  order: number;
}

export const TRAININGS: Training[] = [
  {
    id: 'fe-submission',
    title: 'FE Submission Process',
    description: 'Learn how to submit financial documents and track the process.',
    courseTitle: 'FE Submission Process',
    duration: '2 hours',
    difficulty: 'Beginner',
    modulesCount: 4,
    color: '#00B8A0',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to FE Submission',
        order: 1,
        slides: [
          {
            id: 'slide-1-1',
            type: 'title',
            title: 'FE Submission Process',
            subtitle: 'Master the financial submission workflow',
            description: 'In this module, you\'ll learn the step-by-step process for submitting financial documents.',
          },
          {
            id: 'slide-1-2',
            type: 'content',
            title: 'What is FE Submission?',
            description: 'FE stands for Financial Exchange. It\'s the official process for submitting financial data to the system.',
            content: 'The FE submission process is a critical component of our financial management system. It ensures that all financial data is properly recorded, validated, and tracked.',
            layout: 'standard',
          },
          {
            id: 'slide-1-3',
            type: 'content',
            title: 'Key Steps Overview',
            layout: 'standard',
            content: 'Step 1: Gather Documents\nStep 2: Validate Data\nStep 3: Submit for Review\nStep 4: Track Status',
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Preparation & Requirements',
        order: 2,
        slides: [
          {
            id: 'slide-2-1',
            type: 'content',
            title: 'Document Requirements',
            description: 'Before you submit, ensure you have all required documents.',
            layout: 'standard',
            content: 'Required Documents:\n- Invoice or Receipt\n- Proof of Payment\n- Authorization Documents\n- Supporting Documentation',
          },
          {
            id: 'slide-2-2',
            type: 'content',
            title: 'Data Validation',
            layout: 'standard',
            content: 'All financial data must meet these requirements:\n- Valid amounts\n- Correct date format\n- Complete vendor information\n- Approval signatures',
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Submission Process',
        order: 3,
        slides: [
          {
            id: 'slide-3-1',
            type: 'content',
            title: 'How to Submit',
            layout: 'two-col',
            leftContent: 'Login to the system\nNavigate to FE Submission\nUpload documents\nReview submission',
            rightContent: 'Takes approximately 5 minutes\nSupport available 24/7\nAutomatic confirmation email\nTrack status in dashboard',
          },
        ],
      },
      {
        id: 'module-4',
        title: 'Review & Best Practices',
        order: 4,
        slides: [
          {
            id: 'slide-4-1',
            type: 'summary',
            title: 'Course Summary',
            description: 'Congratulations on completing the FE Submission Process training!',
            content: 'You now understand:\n✓ The FE submission workflow\n✓ Required documentation\n✓ How to submit properly\n✓ How to track submissions',
          },
        ],
      },
    ],
  },
  {
    id: 'medicare-training',
    title: 'Medicare Basics',
    description: 'Understanding Medicare coverage, parts, and enrollment.',
    courseTitle: 'Medicare Training',
    duration: '3 hours',
    difficulty: 'Intermediate',
    modulesCount: 5,
    color: '#3B82F6',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Medicare',
        order: 1,
        slides: [
          {
            id: 'slide-1-1',
            type: 'title',
            title: 'Understanding Medicare',
            subtitle: 'A comprehensive guide to federal health insurance',
            description: 'Learn about Medicare, its parts, and how it works for you.',
          },
          {
            id: 'slide-1-2',
            type: 'content',
            title: 'What is Medicare?',
            content: 'Medicare is the federal health insurance program for people age 65 and older, regardless of income or medical history.',
            layout: 'standard',
          },
        ],
      },
      {
        id: 'module-2',
        title: 'Medicare Parts Explained',
        order: 2,
        slides: [
          {
            id: 'slide-2-1',
            type: 'content',
            title: 'The Four Parts of Medicare',
            layout: 'two-col',
            leftContent: 'Part A: Hospital Insurance\nCovered: Hospital stays, nursing care, hospice',
            rightContent: 'Part B: Medical Insurance\nCovered: Doctor visits, preventive care, medical equipment',
          },
          {
            id: 'slide-2-2',
            type: 'content',
            title: 'Parts C & D',
            layout: 'two-col',
            leftContent: 'Part C: Medicare Advantage\nPrivate plan alternative to Original Medicare',
            rightContent: 'Part D: Prescription Drug Coverage\nHelps pay for prescription medications',
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Enrollment & Timing',
        order: 3,
        slides: [
          {
            id: 'slide-3-1',
            type: 'content',
            title: 'When to Enroll',
            content: 'Enrollment periods are limited. Missing them can affect your coverage.',
            layout: 'standard',
          },
        ],
      },
      {
        id: 'module-4',
        title: 'Costs & Coverage',
        order: 4,
        slides: [
          {
            id: 'slide-4-1',
            type: 'content',
            title: 'Understanding Costs',
            content: 'Medicare has costs including premiums, deductibles, and copayments.',
            layout: 'standard',
          },
        ],
      },
      {
        id: 'module-5',
        title: 'Special Situations',
        order: 5,
        slides: [
          {
            id: 'slide-5-1',
            type: 'summary',
            title: 'Training Complete',
            description: 'You have successfully completed Medicare Basics training.',
            content: 'Key takeaways:\n✓ Medicare is for 65+\n✓ Four parts with different coverage\n✓ Enrollment timing is important\n✓ Costs vary by plan',
          },
        ],
      },
    ],
  },
  {
    id: 'compliance-101',
    title: 'Compliance 101',
    description: 'Essential compliance standards and requirements for healthcare.',
    courseTitle: 'Compliance Training',
    duration: '1.5 hours',
    difficulty: 'Beginner',
    modulesCount: 3,
    color: '#F59E0B',
    modules: [
      {
        id: 'module-1',
        title: 'Compliance Basics',
        order: 1,
        slides: [
          {
            id: 'slide-1-1',
            type: 'title',
            title: 'Compliance 101',
            subtitle: 'Your guide to regulatory standards',
            description: 'Learn the fundamentals of compliance in healthcare.',
          },
          {
            id: 'slide-1-2',
            type: 'content',
            title: 'What is Compliance?',
            content: 'Compliance means following all applicable laws, regulations, and company policies.',
            layout: 'standard',
          },
        ],
      },
      {
        id: 'module-2',
        title: 'HIPAA & Privacy',
        order: 2,
        slides: [
          {
            id: 'slide-2-1',
            type: 'content',
            title: 'HIPAA Overview',
            content: 'HIPAA protects patient privacy and the security of health information.',
            layout: 'standard',
          },
        ],
      },
      {
        id: 'module-3',
        title: 'Best Practices',
        order: 3,
        slides: [
          {
            id: 'slide-3-1',
            type: 'summary',
            title: 'Compliance Complete',
            description: 'You\'ve completed Compliance 101 training.',
            content: 'Remember:\n✓ Always follow policies\n✓ Protect patient data\n✓ Report violations\n✓ Stay updated',
          },
        ],
      },
    ],
  },
];
