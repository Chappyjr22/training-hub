// Slide interface for training content with support for various layouts
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
  infoPanel?: {
    label: string;
    title: string;
    body: string;
    accentColor: string;
  };
  fieldList?: Array<{
    field: string;
    required: boolean;
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
    modulesCount: 13,
    color: '#00B8A0',
    modules: [
      {
        id: 'module-1',
        title: 'FE Submission Training',
        order: 1,
        slides: [
          {
            id: 'slide-0',
            type: 'title',
            title: 'FE Submission Process',
            subtitle: 'Master the financial submission workflow',
            description: 'Learn how to submit financial documents and track the process.',
            image: '/data/fe_intro.png', // Placeholder, update with actual image path
          },
          {
            id: 'slide-1',
            type: 'content',
            title: 'Accessing the Application',
            description: 'Navigate to Contact Options in Atlantis CRM to begin.',
            content: 'Click the Contact Options button and select "Submit Life Application".',
            image: '/data/contact_options.png',
            layout: 'standard',
            infoPanel: {
              label: 'Tip',
              title: 'Start Here',
              body: 'Use the Contact Options menu to access all submission workflows.',
              accentColor: '#00B8A0',
            },
          },
          {
            id: 'slide-2',
            type: 'content',
            title: 'Step 1: Carrier Selection',
            description: 'Select the carrier and policy for the application.',
            content: 'Choose the carrier (e.g., American Amicable) and policy type from the dropdown.',
            image: '/data/carrier_selection.png',
            layout: 'standard',
            fieldList: [
              { field: 'Carrier', required: true },
              { field: 'Monthly Premium', required: true },
              { field: 'Policy Type', required: true },
              { field: 'Policy Length', required: true },
              { field: 'Date Effective', required: true },
            ],
          },
          {
            id: 'slide-3',
            type: 'content',
            title: 'Step 1: Policy Details',
            description: 'Enter monthly premium, date effective, policy type, and length.',
            content: 'Fill in the policy details as shown in the screenshot.',
            image: '/data/policy_details.png',
            layout: 'standard',
          },
          {
            id: 'slide-4',
            type: 'content',
            title: 'Step 2: Applicant Information',
            description: 'Enter applicant details including name, DOB, gender.',
            content: 'Complete all fields for the applicant as shown.',
            image: '/data/applicant_info.png',
            layout: 'standard',
          },
          {
            id: 'slide-5',
            type: 'content',
            title: 'Applicant Qualifications',
            description: 'Enter contact info, height, weight, and medical history.',
            content: 'Fill out all qualification fields for the applicant.',
            image: '/data/applicant_qualifications.png',
            layout: 'standard',
          },
          {
            id: 'slide-6',
            type: 'content',
            title: 'Beneficiary Information',
            description: 'Add primary and contingent beneficiaries.',
            content: 'Enter beneficiary name, DOB, relationship, and contingent info.',
            image: '/data/beneficiary_info.png',
            layout: 'standard',
          },
          {
            id: 'slide-7',
            type: 'content',
            title: 'Payment Information',
            description: 'Configure payment type, card details, and billing cycle.',
            content: 'Enter payment information as shown in the screenshot.',
            image: '/data/payment_info.png',
            layout: 'standard',
          },
          {
            id: 'slide-8',
            type: 'content',
            title: 'Billing Information',
            description: 'Enter billing name, email, phone, and address.',
            content: 'Complete all billing fields and address details.',
            image: '/data/billing_info.png',
            layout: 'standard',
          },
          {
            id: 'slide-9',
            type: 'content',
            title: 'Household & Contingent',
            description: 'Add household members and contingent beneficiaries.',
            content: 'Enter household and contingent information as needed.',
            image: '/data/household_contingent.png',
            layout: 'standard',
          },
          {
            id: 'slide-10',
            type: 'content',
            title: 'Plan Summary',
            description: 'Review carrier, policy, premium, and policy information.',
            content: 'Expand Plan Summary and review all policy details.',
            image: '/data/plan_summary.png',
            layout: 'standard',
          },
          {
            id: 'slide-11',
            type: 'content',
            title: 'File Upload',
            description: 'Upload supporting documents and select file category.',
            content: 'Drag and drop files or click to browse. Select the correct category for each file.',
            image: '/data/file_upload.png',
            layout: 'standard',
          },
          {
            id: 'slide-12',
            type: 'summary',
            title: 'Submit for Review',
            description: 'Complete your submission and review required fields.',
            content: 'Click Submit for Review. Ensure all required fields are completed.',
            image: '/data/submit_review.png',
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
