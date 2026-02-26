import Link from 'next/link';
import { useState } from 'react';
import { TRAININGS } from '@/data/trainings';
import { Play, Clock, BookOpen } from 'lucide-react';

export default function TrainingDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrainings = TRAININGS.filter(
    (training) =>
      training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      training.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 
                style={{ 
                  fontFamily: 'var(--font-display)',
                  color: 'var(--ink)',
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 'bold'
                }}
              >
                Training Hub
              </h1>
              <p style={{ color: 'var(--ink-2)', fontSize: '15px' }} className="mt-2">
                Explore and complete professional training courses
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search trainings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                fontFamily: 'var(--font)',
                color: 'var(--ink)',
                borderColor: 'var(--border)',
              }}
              className="w-full rounded-lg border bg-white px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0"
              onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 3px var(--teal-light)`)}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="max-w-7xl mx-auto">
          {filteredTrainings.length === 0 ? (
            <div
              style={{
                borderColor: 'var(--border)',
                background: 'var(--white)',
              }}
              className="rounded-lg border-2 border-dashed py-12 text-center"
            >
              <BookOpen className="mx-auto h-12 w-12" style={{ color: 'var(--ink-3)' }} />
              <h3 style={{ color: 'var(--ink)' }} className="mt-4 text-lg font-semibold">
                No trainings found
              </h3>
              <p style={{ color: 'var(--ink-3)' }} className="mt-2 text-sm">
                Try adjusting your search query
              </p>
            </div>
          ) : (
            <>
              {/* Training Cards Grid */}
              <div className="dashboard-grid">
                {filteredTrainings.map((training) => (
                  <Link
                    key={training.id}
                    href={`/training/${training.id}`}
                    className="training-card"
                    style={{
                      background: 'var(--white)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    {/* Color Band */}
                    <div
                      className="h-1.5 w-full rounded-t-lg -m-6 mb-4"
                      style={{ background: training.color }}
                    />

                    <div className="training-card-header">
                      {/* Title */}
                      <h3 className="training-card-title">{training.title}</h3>

                      {/* Description */}
                      <p className="training-card-desc line-clamp-2">
                        {training.description}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="training-card-meta">
                      <span className="meta-badge">
                        <Clock className="h-3 w-3" />
                        {training.duration}
                      </span>
                      <span className="meta-badge">
                        <span style={{ fontSize: '10px', fontWeight: '700' }}>
                          {training.difficulty}
                        </span>
                      </span>
                      <span className="meta-badge">
                        <BookOpen className="h-3 w-3" />
                        {training.modulesCount} modules
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="training-card-footer">
                      <div className="training-card-cta">
                        Start Course
                        <Play className="h-4 w-4 fill-current" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
