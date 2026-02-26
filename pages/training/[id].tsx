import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { TRAININGS } from '@/data/trainings';
import { useState, useEffect } from 'react';

const TrainingPlayer = dynamic(() => import('@/components/TrainingPlayer'), {
  ssr: false,
});

export default function TrainingPage() {
  const router = useRouter();
  const { id } = router.query;
  const [training, setTraining] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const found = TRAININGS.find((t) => t.id === id);
    if (found) {
      setTraining(found);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600" />
          <p className="text-slate-600">Loading training...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-100">
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Training Not Found</h1>
          <p className="text-slate-600 mb-6">The training you're looking for doesn't exist.</p>
          <a
            href="/"
            className="inline-block rounded-lg bg-teal-600 px-6 py-2 text-white font-medium hover:bg-teal-700 transition-colors"
          >
            Back to Dashboard
          </a>
        </div>
      </div>
    );
  }

  return training ? <TrainingPlayer training={training} /> : null;
}
