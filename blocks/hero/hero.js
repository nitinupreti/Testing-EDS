export default async function decorate(block) {
  console.log("Hero component....",block);
  const pictureTag = block.querySelector('picture');
  const parentDivTag = pictureTag.parentElement;
  console.log("parentDivTag....",parentDivTag);
  var p = document.createElement('p');
  p.classList.add("button-container");
  var a = document.createElement('a');
        var linkText = document.createTextNode("my title text");
        a.appendChild(linkText);
        a.title = "my title text";
        a.href = "https://example.com";
        a.classList.add("button");
        p.append(a);
        parentDivTag.append(p);
}