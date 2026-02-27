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
          },
          {
            id: 'slide-1',
            type: 'content',
            title: 'Selecting the Application',
            description: 'Start by accessing the Contact Options and selecting the appropriate carrier and policy.',
            content: 'Navigate to Atlantis CRM and click the Contact Options button to begin the application process. This is your entry point for creating a new financial submission.',
            layout: 'standard',
          },
          {
            id: 'slide-2',
            type: 'content',
            title: 'Application Step 1 — Carrier',
            description: 'Select the carrier for the application.',
            content: 'Choose the appropriate carrier from the dropdown menu. This selection determines which policy options will be available in the next step. Common carriers include American Amicable and other financial institutions.',
            layout: 'standard',
          },
          {
            id: 'slide-3',
            type: 'content',
            title: 'Application Step 1 — Policy',
            description: 'Select the specific policy type for the chosen carrier.',
            content: 'After selecting a carrier, you must choose the applicable policy type. Different carriers offer different policy options, so make sure to select the correct one that matches your client\'s needs.',
            layout: 'standard',
          },
          {
            id: 'slide-4',
            type: 'content',
            title: 'Application Step 2 — Applicant',
            description: 'Enter the applicant\'s personal information.',
            content: 'Provide the applicant\'s basic information including first name, last name, and other personal details. Ensure all fields are completed accurately as they will be used throughout the submission process.',
            layout: 'standard',
          },
          {
            id: 'slide-5',
            type: 'content',
            title: 'Reviewing the Application',
            description: 'Review all entered information before proceeding.',
            content: 'Take time to review the full application record showing all sections that need to be completed. This ensures you haven\'t missed any required information and helps catch errors early in the process.',
            layout: 'standard',
          },
          {
            id: 'slide-6',
            type: 'content',
            title: 'Plan Summary & Policy Details',
            description: 'Configure the plan summary and policy information.',
            content: 'Expand the Plan Summary section to access Policy Information fields. This includes details about coverage amounts, plan types, and other policy-specific information that customizes the application for your client.',
            layout: 'standard',
          },
          {
            id: 'slide-7',
            type: 'content',
            title: 'Recording Client Info',
            description: 'Enter applicant personal information fields.',
            content: 'Complete all applicant information including demographics such as height and weight if applicable. These fields help create a complete profile of the applicant for underwriting purposes.',
            layout: 'standard',
          },
          {
            id: 'slide-8',
            type: 'content',
            title: 'Adding the Beneficiary',
            description: 'Designate primary and contingent beneficiaries.',
            content: 'Add at least one primary beneficiary (required) and optionally one or more contingent beneficiaries. Clearly specify the relationship and contact information for each beneficiary.',
            layout: 'standard',
          },
          {
            id: 'slide-9',
            type: 'content',
            title: 'Payment Information',
            description: 'Configure payment details and method.',
            content: 'Select the payment type from the dropdown menu. Options may include automatic bank draft, credit card, or other payment methods depending on the carrier. Ensure the payment method is properly configured.',
            layout: 'standard',
          },
          {
            id: 'slide-10',
            type: 'content',
            title: 'Billing Address',
            description: 'Enter the billing address information.',
            content: 'Provide the complete billing address where statements and documents will be sent. Verify that the address is accurate and matches the applicant\'s current mailing address.',
            layout: 'standard',
          },
          {
            id: 'slide-11',
            type: 'content',
            title: 'File Upload',
            description: 'Upload necessary supporting documents.',
            content: 'Use the file upload section to attach required documentation such as applications, medical records, or identification. Select the appropriate category for each file to ensure proper organization.',
            layout: 'standard',
          },
          {
            id: 'slide-12',
            type: 'summary',
            title: 'Submit for Review',
            description: 'Complete your submission.',
            content: 'Once all sections are complete and all required files are uploaded, click the Submit for Review button. Your application will then be routed to the appropriate team for processing and underwriting.',
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
