async function fetchPlaceholders() {
  window.samplejson = window.samplejson || {};
    window.samplejson = new Promise((resolve) => {
      const url = 'https://dummyjson.com/users';
      fetch(url)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((json) => {
          window.samplejson = json;
          resolve(window.samplejson);
        })
        .catch(() => {
          // error loading placeholders
          window.samplejson = {};
          resolve(window.samplejson);
        });
    });
  return window.samplejson;
}

export default async function decorate(block) {

  const form = await fetchPlaceholders();

}
