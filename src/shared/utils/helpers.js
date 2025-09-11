import { SCROLL_CONFIG, STORAGE_KEYS } from './constants.js';

/**
 * Scroll suave a una sección específica
 * @param {string} sectionId - ID de la sección (#projects, #skills, etc.)
 */
export const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - SCROLL_CONFIG.offset;
    window.scrollTo({
      top: offsetTop,
      behavior: SCROLL_CONFIG.behavior
    });
  }
};

/**
 * Manejo de navegación con scroll suave
 * @param {Event} event - Evento del click
 * @param {string} href - href del enlace (#projects, #skills, etc.)
 */
export const handleNavigation = (event, href) => {
  if (href.startsWith('#')) {
    event.preventDefault();
    scrollToSection(href);
  }
};

/**
 * Formatear nombre de tecnología para clases CSS
 * @param {string} techName - Nombre de la tecnología
 * @returns {string} - Nombre formateado para CSS
 */
export const formatTechName = (techName) => {
  return techName.toLowerCase().replace(/[^a-z0-9]/g, '-');
};

/**
 * Generar ID único basado en timestamp
 * @param {string} prefix - Prefijo para el ID
 * @returns {string} - ID único
 */
export const generateId = (prefix = 'id') => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Debounce function para optimizar rendimiento
 * @param {Function} func - Función a debounce
 * @param {number} delay - Delay en ms
 * @returns {Function} - Función con debounce
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Validar email básico
 * @param {string} email - Email a validar
 * @returns {boolean} - true si es válido
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Formatear fecha para mostrar
 * @param {Date|string} date - Fecha a formatear
 * @param {string} locale - Locale (es, en)
 * @returns {string} - Fecha formateada
 */
export const formatDate = (date, locale = 'es') => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Copiar texto al portapapeles
 * @param {string} text - Texto a copiar
 * @returns {Promise<boolean>} - true si se copió correctamente
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback para navegadores viejos
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
};

/**
 * Obtener valor del localStorage de forma segura
 * @param {string} key - Clave del storage
 * @param {*} defaultValue - Valor por defecto
 * @returns {*} - Valor del storage o default
 */
export const getStorageItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
};

/**
 * Guardar valor en localStorage de forma segura
 * @param {string} key - Clave del storage
 * @param {*} value - Valor a guardar
 * @returns {boolean} - true si se guardó correctamente
 */
export const setStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Error writing localStorage key "${key}":`, error);
    return false;
  }
};

/**
 * Detectar si el usuario prefiere tema oscuro
 * @returns {boolean} - true si prefiere dark mode
 */
export const prefersDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/**
 * Detectar si es dispositivo móvil
 * @returns {boolean} - true si es móvil
 */
export const isMobileDevice = () => {
  return window.innerWidth <= 768;
};

/**
 * Obtener dimensiones de la ventana
 * @returns {Object} - {width, height}
 */
export const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

/**
 * Capitalizar primera letra
 * @param {string} str - String a capitalizar
 * @returns {string} - String capitalizado
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Truncar texto con ellipsis
 * @param {string} text - Texto a truncar
 * @param {number} maxLength - Longitud máxima
 * @returns {string} - Texto truncado
 */
export const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

/**
 * Delay/sleep function para async/await
 * @param {number} ms - Milisegundos de delay
 * @returns {Promise} - Promise que resuelve después del delay
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Validar si una URL es válida
 * @param {string} url - URL a validar
 * @returns {boolean} - true si es válida
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Generar clases CSS condicionales
 * @param {Object} classMap - Objeto con className: condición
 * @returns {string} - String de clases CSS
 */
export const conditionalClasses = (classMap) => {
  return Object.entries(classMap)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
};

export default {
  scrollToSection,
  handleNavigation,
  formatTechName,
  generateId,
  debounce,
  isValidEmail,
  formatDate,
  copyToClipboard,
  getStorageItem,
  setStorageItem,
  prefersDarkMode,
  isMobileDevice,
  getWindowDimensions,
  capitalize,
  truncateText,
  delay,
  isValidUrl,
  conditionalClasses
};