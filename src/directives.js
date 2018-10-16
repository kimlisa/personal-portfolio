
// copies current selection to the clipboard
export const CopyText = {
  bind(el, binding, vnode) {
    console.log('el: ', el);
    console.log('binding: ', binding);
    console.log("binding value: ", binding.value)
    const copyValue = el.textContent;

    el.addEventListener('click', (e) => {
      el.select();
      document.execCommand('copy');
    });
  },
};
