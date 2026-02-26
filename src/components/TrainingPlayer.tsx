import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Training } from '@/data/trainings';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface TrainingPlayerProps {
  training: Training;
}

export default function TrainingPlayer({ training }: TrainingPlayerProps) {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  const currentModule = training.modules[currentModuleIndex];
  const currentSlide = currentModule.slides[currentSlideIndex];
  const totalSlides = training.modules.reduce((sum, m) => sum + m.slides.length, 0);
  const completedSlides =
    training.modules.slice(0, currentModuleIndex).reduce((sum, m) => sum + m.slides.length, 0) +
    currentSlideIndex +
    1;
  const progress = (completedSlides / totalSlides) * 100;

  const handleNextSlide = useCallback(() => {
    if (currentSlideIndex < currentModule.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else if (currentModuleIndex < training.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setCurrentSlideIndex(0);
      setCompletedModules(new Set([...completedModules, currentModule.id]));
    }
  }, [currentSlideIndex, currentModuleIndex, currentModule, training.modules.length, completedModules]);

  const handlePrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (currentModuleIndex > 0) {
      const prevModule = training.modules[currentModuleIndex - 1];
      setCurrentModuleIndex(currentModuleIndex - 1);
      setCurrentSlideIndex(prevModule.slides.length - 1);
    }
  }, [currentSlideIndex, currentModuleIndex, training.modules]);

  const goToModule = (moduleIndex: number, slideIndex: number = 0) => {
    setCurrentModuleIndex(moduleIndex);
    setCurrentSlideIndex(slideIndex);
    setSidebarOpen(false);
  };

  const isLastSlide =
    currentModuleIndex === training.modules.length - 1 &&
    currentSlideIndex === currentModule.slides.length - 1;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--surface)' }}>
      {/* Top Chrome Bar */}
      <header className="chrome">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="menu-btn">
          {sidebarOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <>
              <div></div>
              <div></div>
              <div></div>
            </>
          )}
        </button>

        <Link href="/" className="logo">
          <span>⊿</span>
          Training
        </Link>

        <span className="course-title">{currentModule.title}</span>

        <div className="progress-area">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="slide-counter">
            {completedSlides} / {totalSlides}
          </span>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Sidebar Navigation */}
        <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div style={{ padding: '16px 12px' }}>
            <h3 className="nav-section">Modules</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {training.modules.map((module, moduleIdx) => (
                <div key={module.id}>
                  <button
                    onClick={() => goToModule(moduleIdx, 0)}
                    className={`nav-item ${currentModuleIndex === moduleIdx ? 'active' : ''} ${
                      completedModules.has(module.id) ? 'done' : ''
                    }`}
                  >
                    <span className="nav-num">{moduleIdx + 1}</span>
                    <span>{module.title}</span>
                  </button>

                  {/* Nested slides */}
                  {currentModuleIndex === moduleIdx && (
                    <div
                      style={{
                        marginLeft: '24px',
                        marginTop: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        borderLeft: `1px solid var(--border)`,
                        paddingLeft: '12px',
                      }}
                    >
                      {module.slides.map((slide, slideIdx) => (
                        <button
                          key={slide.id}
                          onClick={() => goToModule(moduleIdx, slideIdx)}
                          style={{
                            fontFamily: 'var(--font)',
                            padding: '6px 10px',
                            fontSize: '12px',
                            border: 'none',
                            background:
                              currentSlideIndex === slideIdx ? 'var(--teal-light)' : 'transparent',
                            color: currentSlideIndex === slideIdx ? 'var(--teal-mid)' : 'var(--ink-3)',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            if (currentSlideIndex !== slideIdx) {
                              (e.currentTarget as HTMLButtonElement).style.background =
                                'var(--surface)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (currentSlideIndex !== slideIdx) {
                              (e.currentTarget as HTMLButtonElement).style.background =
                                'transparent';
                            }
                          }}
                        >
                          {slide.title || `Slide ${slideIdx + 1}`}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main">
          {currentSlide.type === 'title' && (
            <div className="slide-title-screen">
              <div>
                <div className="slide-step-badge">{currentModule.title}</div>
                <h1 className="title-h1">{currentSlide.title}</h1>
                {currentSlide.subtitle && <p className="title-sub">{currentSlide.subtitle}</p>}
                {currentSlide.description && <p className="title-sub">{currentSlide.description}</p>}
              </div>
            </div>
          )}

          {currentSlide.type === 'content' && (
            <div className="slide-inner">
              <div className="slide-header">
                <div className="slide-step-badge">Step {currentSlideIndex + 1}</div>
                <h2 className="slide-h2">{currentSlide.title}</h2>
                {currentSlide.description && (
                  <p className="slide-lead">{currentSlide.description}</p>
                )}
              </div>

              <div
                className={currentSlide.layout?.startsWith('two-col') ? 'two-col' : ''}
                style={
                  currentSlide.layout === 'two-col-wide-left'
                    ? { gridTemplateColumns: '1.4fr 1fr' }
                    : currentSlide.layout === 'two-col-wide-right'
                    ? { gridTemplateColumns: '1fr 1.4fr' }
                    : {}
                }
              >
                {currentSlide.layout?.startsWith('two-col') ? (
                  <>
                    <div className="info-panel">
                      <div
                        style={{
                          whiteSpace: 'pre-line',
                          fontSize: '15px',
                          lineHeight: '1.65',
                          color: 'var(--ink-2)',
                        }}
                      >
                        {currentSlide.leftContent}
                      </div>
                    </div>
                    <div className="info-panel">
                      <div
                        style={{
                          whiteSpace: 'pre-line',
                          fontSize: '15px',
                          lineHeight: '1.65',
                          color: 'var(--ink-2)',
                        }}
                      >
                        {currentSlide.rightContent}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="info-panel">
                    <div
                      style={{
                        whiteSpace: 'pre-line',
                        fontSize: '15px',
                        lineHeight: '1.65',
                        color: 'var(--ink-2)',
                      }}
                    >
                      {currentSlide.content}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentSlide.type === 'summary' && (
            <div className="slide-inner" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ maxWidth: '600px' }}>
                <div style={{ fontSize: '60px', marginBottom: '24px' }}>🎉</div>
                <h2 className="slide-h2">{currentSlide.title}</h2>
                <p className="slide-lead">{currentSlide.description}</p>
                <div
                  style={{
                    background: 'var(--teal-light)',
                    border: `1px solid #5DDFCD`,
                    borderRadius: 'var(--radius)',
                    padding: '32px',
                    marginTop: '32px',
                  }}
                >
                  <div
                    style={{
                      whiteSpace: 'pre-line',
                      fontSize: '15px',
                      lineHeight: '1.65',
                      color: 'var(--ink-2)',
                    }}
                  >
                    {currentSlide.content}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Navigation Footer */}
      <footer className="nav-footer">
        <button
          onClick={handlePrevSlide}
          disabled={currentModuleIndex === 0 && currentSlideIndex === 0}
          className="btn"
          style={{
            opacity: currentModuleIndex === 0 && currentSlideIndex === 0 ? 0.5 : 1,
            cursor:
              currentModuleIndex === 0 && currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <ChevronLeft className="h-4 w-4" style={{ marginRight: '4px' }} />
          Previous
        </button>

        <div className="nav-footer-info">
          Module {currentModuleIndex + 1} of {training.modules.length} • Slide{' '}
          {currentSlideIndex + 1} of {currentModule.slides.length}
        </div>

        <button
          onClick={handleNextSlide}
          disabled={isLastSlide}
          className="btn-primary"
          style={{
            opacity: isLastSlide ? 0.5 : 1,
            cursor: isLastSlide ? 'not-allowed' : 'pointer',
          }}
        >
          {isLastSlide ? 'Completed' : 'Next'}
          {!isLastSlide && <ChevronRight className="h-4 w-4" style={{ marginLeft: '4px' }} />}
        </button>
      </footer>
    </div>
  );
}
