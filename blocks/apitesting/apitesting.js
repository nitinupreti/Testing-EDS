async function fetchPlaceholders(prefix = 'default') {
  window.samplejson = window.samplejson || {};
  if (!window.samplejson[prefix]) {
    window.samplejson[prefix] = new Promise((resolve) => {
      const url = 'https://dummyjson.com/users';
      fetch(url)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          return {};
        })
        .then((json) => {
          const placeholders = {};
          json.data
            .filter((placeholder) => placeholder.Key)
            .forEach((placeholder) => {
              placeholders[toCamelCase(placeholder.Key)] = placeholder.Text;
            });
          window.samplejson[prefix] = placeholders;
          resolve(window.samplejson[prefix]);
        })
        .catch(() => {
          // error loading placeholders
          window.samplejson[prefix] = {};
          resolve(window.samplejson[prefix]);
        });
    });
  }
  return window.samplejson[`${prefix}`];
}

export default async function decorate(block) {

  const form = await fetchPlaceholders();

}
