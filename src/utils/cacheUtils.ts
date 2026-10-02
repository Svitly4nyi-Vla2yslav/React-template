// utils/cacheUtils.ts
const CACHE_PREFIX = 'media_cache_';
const CACHE_EXPIRATION_DAYS = 7;

/**
 * Повертає медіа за URL, використовуючи localStorage-кеш строком до семи днів.
 * Зображення завантажуються й зберігаються як data URL, для відео кешується вихідна адреса;
 * за помилки мережі функція повертає початковий URL, не перериваючи рендеринг.
 */
export const fetchWithCache = async (url: string): Promise<string> => {
  const cacheKey = CACHE_PREFIX + url;
  const cachedItem = localStorage.getItem(cacheKey);

  if (cachedItem) {
    const { data, timestamp, isVideo } = JSON.parse(cachedItem);
    
    // Перевіряє строк придатності раніше збереженого запису.
    if (Date.now() - timestamp < CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
      if (isVideo) {
        // Для відео повертає збережену початкову адресу.
        return data;
      } else {
        // Для зображення повертає збережений data URL.
        return data;
      }
    }

    // Прострочений запис видаляється перед новим завантаженням.
    localStorage.removeItem(cacheKey);
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Зображення перетворюється на data URL через FileReader.
    if (url.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
      const blob = await response.blob();
      const reader = new FileReader();

      return new Promise<string>((resolve, reject) => {
        reader.onloadend = () => {
          const base64data = reader.result as string;
          localStorage.setItem(cacheKey, JSON.stringify({
            data: base64data,
            timestamp: Date.now(),
            isVideo: false
          }));
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }
    // Відео не записується цілком у localStorage: кешується лише URL.
    else if (url.match(/\.(mp4|webm|ogg)$/i)) {
      localStorage.setItem(cacheKey, JSON.stringify({
        data: url,
        timestamp: Date.now(),
        isVideo: true
      }));
      return url;
    }
    
    return url;
  } catch (error) {
    console.error('Failed to fetch media:', error);
    return url;
  }
};

/**
 * Перебирає лише записи з префіксом медіакешу та видаляє старші за сім днів.
 * Функція нічого не повертає й змінює localStorage; інші ключі не зачіпає.
 */
export const cleanupCache = () => {
  Object.keys(localStorage).forEach(key => {
    if (key.startsWith(CACHE_PREFIX)) {
      const item = localStorage.getItem(key);
      if (item) {
        const { timestamp } = JSON.parse(item);
        if (Date.now() - timestamp > CACHE_EXPIRATION_DAYS * 24 * 60 * 60 * 1000) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

// Очищення запускається один раз як побічний ефект імпорту модуля.
cleanupCache();
