const useSplash = () => {
  const URL = "https://api.unsplash.com/photos/random/?";
  const key = import.meta.env.VITE_UNSPLASH;
  const getBackground = async (query) => {
    // 2560 1440
    let raw = await fetch(
      `${URL}client_id=${key}&orientation=landscape&query=${query}&per_page=1`
    );
    return raw.json();
  };
  return { getBackground };
};

export default useSplash;
