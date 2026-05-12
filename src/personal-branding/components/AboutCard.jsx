import { useSettings } from '../../shared/context/SettingsContext';

/**
 * AboutCard - Tarjeta con descripción personal y achievements
 * Reemplaza la hero-about-card del Hero.jsx original
 */
export default function AboutCard({
  bioLength = 'medium', // 'short', 'medium', 'long'
  showAchievements = false,
  showStats = false,
  variant = 'default', // 'default', 'compact', 'detailed'
  enableAnimations = true,
  className = ''
}) 
{
  const { t, language } = useSettings();
  
  const bio = t.about[`${bioLength}Bio`] || t.about.mediumBio;
  const achievements = [
    { id: 'cacomi_perf', ...t.achievements.cacomi_perf, icon: 'fas fa-bolt' },
    { id: 'ai_integration', ...t.achievements.ai_integration, icon: 'fas fa-robot' },
    { id: 'velonia', ...t.achievements.velonia, icon: 'fas fa-shopping-cart' }
  ];

  const getCardClasses = () => {
    const baseClasses = `hero-about-card mt-4 div-center ${className}`;
    const variantClasses = {
      default: 'about-card-default',
      compact: 'about-card-compact',
      detailed: 'about-card-detailed'
    };
    const animationClass = enableAnimations ? 'animate-fade-in-up' : '';

    return `${baseClasses} ${variantClasses[variant]} ${animationClass}`.trim();
  };

  if (variant === 'compact') {
    return (
      <div className={getCardClasses()}>
        <p className="mb-0 text-secondary small">
          {getBio('short')}
        </p>
      </div>
    );
  }

  return (
    <div className={getCardClasses()} id='about'>
      {/* Biografía principal */}
      <div className="about-bio text-center">
        <p className={`mb-${showAchievements || showStats ? '3' : '0'}`}>
          {bio}
        </p>
      </div>

      {/* Achievements destacados (opcional) */}
      {showAchievements && achievements.length > 0 && (
        <div className="about-achievements mt-3">
          <h6 className="text-primary-css text-center mb-2">
            <i className="fas fa-trophy me-2"></i>
            {t.achievements.title}
          </h6>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className={`achievement-item div-center ${enableAnimations ? 'animate-slide-in' : ''}`}
                style={{ animationDelay: enableAnimations ? `${0.1 * index}s` : '0' }}
              >
                <div className="achievement-icon">
                  <i className={achievement.icon}></i>
                </div>
                <div className="achievement-content">
                  <small className="fw-bold text-center d-block">{achievement.title}</small>
                  <small className="text-secondary text-center d-block">{achievement.desc}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats rápidas (opcional) */}
      {showStats && (
        <div className="about-stats mt-3">
          <div className="row text-center">
            <div className="col-4">
              <div className="stat-item">
                <h6 className="stat-number mb-0">2+</h6>
                <small className="text-secondary">{language === 'es' ? 'Años Exp.' : 'Years Exp.'}</small>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item">
                <h6 className="stat-number mb-0">15k+</h6>
                <small className="text-secondary">{language === 'es' ? 'Líneas Código' : 'Lines of Code'}</small>
              </div>
            </div>
            <div className="col-4">
              <div className="stat-item">
                <h6 className="stat-number mb-0">25+</h6>
                <small className="text-secondary">{language === 'es' ? 'Tecnologías' : 'Technologies'}</small>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Indicador de estado actual de aprendizaje */}
      {variant === 'detailed' && (
        <div className="mt-3">
          <h6 className="text-primary-css text-center mb-2">
            <i className="fas fa-book me-2"></i>
            {language === 'es' ? 'Aprendiendo' : 'Currently Learning'}
          </h6>
          <div className="learning-tags">
            {['React', 'Architecture Patterns', 'Testing'].map((tech, index) => (
              <span
                key={tech}
                className={`badge bg-light text-dark me-1 mb-1 ${enableAnimations ? 'animate-scale-in' : ''}`}
                style={{ animationDelay: enableAnimations ? `${0.1 * index}s` : '0' }}
              >
                <i className="fas fa-graduation-cap me-1" style={{ fontSize: '10px' }}></i>
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Call to action opcional */}
      {variant === 'detailed' && (
        <div className="about-cta mt-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <a
                href="mailto:luisdavidtrejofuentes@gmail.com"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="fas fa-envelope me-1"></i>
                {t.hero.ctaContact}
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://www.linkedin.com/in/luis-david-trejo-fuentes/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="fab fa-linkedin me-1"></i>
                Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}