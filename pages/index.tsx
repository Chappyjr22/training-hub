import dynamic from 'next/dynamic';

// Import the dashboard dynamically to avoid SSR issues
const TrainingDashboard = dynamic(() => import('../src/components/TrainingDashboard'), { ssr: false });

export default function Home() {
  return <TrainingDashboard />;
}
